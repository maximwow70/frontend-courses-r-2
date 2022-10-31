import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorRed]',
})
export class ColorRedDirective {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.color = 'green';
  }
}
