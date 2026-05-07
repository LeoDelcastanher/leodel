import { Pipe, PipeTransform } from '@angular/core';

export interface TextSegment {
  text: string;
  highlight: boolean;
}

@Pipe({
  name: 'heyListen',
  standalone: true
})
export class HeyListenPipe implements PipeTransform {
  transform(value: string): TextSegment[] {
    if (!value) return [];
    return value.split(/\[\[(.+?)\]\]/)
      .map((text, index) => ({ text, highlight: index % 2 === 1 }))
      .filter(segment => segment.text.length > 0);
  }
}
