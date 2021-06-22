import { RecipesService } from './../../recipes.services';
import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-recipe-item',
    templateUrl: './recipe-item.component.html',
    styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
    @Input() recipe: Recipe;
    @Input() idx: number;

    constructor(private recipeService: RecipesService, private router: Router, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {}

    onSelected(): void {
        this.recipeService.recipeSelected.emit(this.recipe);
    }
}
