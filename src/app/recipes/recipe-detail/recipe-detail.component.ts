import { RecipesService } from './../recipes.services';
import { ActivatedRoute, Params } from '@angular/router';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
    recipe: Recipe;
    id: number;

    constructor(
        private shoppingListService: ShoppingListService,
        private route: ActivatedRoute,
        private recipeService: RecipesService
    ) {}

    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.recipe = this.recipeService.getRecipe(this.id);
        });
    }

    addIngredientsToShoppingList(): void {
        console.log('adding ingredients');
        this.shoppingListService.addIngredients(this.recipe.ingredients);
    }
}
