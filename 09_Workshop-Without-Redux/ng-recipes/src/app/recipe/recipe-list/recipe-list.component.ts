import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeListItemModel } from '../models/recipe-list-item.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Observable<RecipeListItemModel[]>

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getAllRecipes()
  }

}
