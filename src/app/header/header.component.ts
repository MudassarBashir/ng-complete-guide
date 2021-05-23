import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() headerItemSelected = new EventEmitter<string>();

  onHeaderItemSelected(headerItem: string): void {
    this.headerItemSelected.emit(headerItem);
  }
}
