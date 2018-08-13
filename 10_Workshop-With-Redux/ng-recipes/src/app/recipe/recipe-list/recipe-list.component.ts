import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeListItemModel } from '../models/recipe-list-item.model';
import { RecipeService } from '../recipe.service';
import { AppState } from '../../store/app.state';
import { Store, select } from '../../../../node_modules/@ngrx/store';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Observable<RecipeListItemModel[]>

  constructor(
    private recipeService: RecipeService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.recipeService.getAllRecipes().subscribe(() => {
      this.recipes = this.store.pipe(select(state => state.recipes.all))
    })
  }

}
