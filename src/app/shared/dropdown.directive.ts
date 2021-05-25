import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    /**
     * Here, the ternary operator is used to perform a check whether it is the drop down that is being clicked on. If so, simply toggle
     * the isOpen state. Otherwise, the click must've occurred somewhere else in which case we enforce a close action.
     */
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {
  }
}
