import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appIsNotCurrentMonth]',
})
export class IsNotCurrentMonthDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.color = '#BFBEBE';
  }
}
