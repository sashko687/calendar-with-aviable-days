import { Directive, ElementRef, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appDefaultInput]'
})
export class DefaultInputDirective {

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.backgroundColor = '#66FF66';
   }
}
