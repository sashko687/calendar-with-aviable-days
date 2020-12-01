import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appToday]'
})
export class TodayDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = '#6666FF';
  }

}
