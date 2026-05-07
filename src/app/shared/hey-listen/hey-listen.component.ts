import { Component, computed, ElementRef, HostListener, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { HeyListenService } from '../../services/hey-listen.service';
import { MyNotificationService } from '../../services/my-notification.service';

@Component({
  selector: 'hey-listen',
  templateUrl: './hey-listen.component.html',
  styleUrls: ['./hey-listen.component.scss'],
  standalone: true,
  host: { '[class.active]': 'isActive()' }
})
export class HeyListenComponent implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef);
  private readonly heyListenService = inject(HeyListenService);
  private readonly notificationService = inject(MyNotificationService);

  @Input() term = '';
  isActive = computed(() =>
    this.heyListenService.activeTerm()?.toLowerCase() === this.term.toLowerCase()
  );

  ngOnInit(): void {
    // Fallback for static usages like <hey-listen>Angular</hey-listen>
    // where no [term] input is provided (textContent is available for static nodes)
    if (!this.term) {
      this.term = this.el.nativeElement.textContent.trim();
    }
    this.heyListenService.register(this);
  }

  ngOnDestroy(): void {
    this.heyListenService.unregister(this);
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    event.stopPropagation();

    if (this.heyListenService.activeTerm()?.toLowerCase() === this.term.toLowerCase()) {
      this.heyListenService.cycleToNext(this.term, this);
    } else {
      const count = this.heyListenService.setActiveTerm(this.term);
      const others = count - 1;
      if (others > 0) {
        this.notificationService.addNotification({
          title: `${others} more mention${others > 1 ? 's' : ''} of "${this.term}"`,
          type: 'info',
          duration: true
        });
      }
    }
  }

  @HostListener('document:click')
  onDocumentClick(): void {
    this.heyListenService.clearActiveTerm();
  }

  scrollIntoView(): void {
    this.el.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
