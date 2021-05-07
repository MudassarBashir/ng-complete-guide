import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Veggie Kabob',
      'So yummy bhaiya.',
      'https://simpleveganblog.com/wp-content/uploads/2019/07/Vegetable-kabobs-5.jpg'
    ),
    new Recipe(
      'Biryani',
      'Bohot hi mazedaar yaar!',
      'https://myfoodstory.com/wp-content/uploads/2020/09/Veg-Biryani-Restaurant-Style-at-home-4-500x500.jpg'
    )
  ];

  constructor() {}

  ngOnInit(): void {}
}
