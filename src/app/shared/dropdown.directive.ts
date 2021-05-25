import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  isClosed: boolean = true;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onClick(event: Event) {
    if (this.isClosed) {
    this.renderer.addClass(this.elementRef.nativeElement, 'open');
    this.isClosed = false;
  } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
      this.isClosed = true;
    }
  }

}
