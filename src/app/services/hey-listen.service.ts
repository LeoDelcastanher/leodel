import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class HeyListenService {
  activeTerm = signal<string | null>(null);
  private instances: any[] = [];

  register(instance: any): void {
    this.instances.push(instance);
  }

  unregister(instance: any): void {
    this.instances = this.instances.filter(i => i !== instance);
  }

  getMatches(term: string): any[] {
    return this.instances.filter(i => i.term.toLowerCase() === term.toLowerCase());
  }

  setActiveTerm(term: string): number {
    this.activeTerm.set(term);
    return this.getMatches(term).length;
  }

  clearActiveTerm(): void {
    this.activeTerm.set(null);
  }

  cycleToNext(term: string, current: any): void {
    const matches = this.getMatches(term);
    if (matches.length <= 1) return;
    const currentIndex = matches.indexOf(current);
    const nextIndex = (currentIndex + 1) % matches.length;
    matches[nextIndex].scrollIntoView();
  }
}
