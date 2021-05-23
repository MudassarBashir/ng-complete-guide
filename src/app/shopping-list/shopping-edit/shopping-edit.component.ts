import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientNameInput') ingredientNameInput: ElementRef;
  @ViewChild('ingredientAmountInput') ingredientAmountInput: ElementRef;

  @Output() ingredientEntered = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onIngredientEntered(): void {
    this.ingredientEntered.emit(
      new Ingredient(
        this.ingredientNameInput.nativeElement.value,
        this.ingredientAmountInput.nativeElement.value
      )
    );
  }
}
