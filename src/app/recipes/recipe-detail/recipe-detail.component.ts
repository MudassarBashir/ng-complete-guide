import { ActivatedRoute, Params } from '@angular/router';
import { RecipesService } from './../recipes.services';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;

    constructor(
        private shoppingListService: ShoppingListService,
        private recipesService: RecipesService,
        private activatedRoute: ActivatedRoute
    ) {}

    ngOnInit() {
        this.recipe = this.recipesService.getRecipes()[this.activatedRoute.snapshot.params['id']];
        this.activatedRoute.params.subscribe((params: Params) => {
            this.recipe = this.recipesService.getRecipes()[params['id']];
        });
    }

    addIngredientsToShoppingList(): void {
        this.shoppingListService.addIngredients(this.recipe.ingredients);
    }
}
