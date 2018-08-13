import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RecipeListItemModel } from './models/recipe-list-item.model';
import { RecipeCreateModel } from './models/recipe-create.model';
import { Store } from '../../../node_modules/@ngrx/store';
import { AppState } from '../store/app.state';
import { GetAllRecipes, GetRecipeDetails } from '../store/actions/recipes.actions';

const baseUrl = 'https://ng-recipes-cb703.firebaseio.com/recipes/'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private httpClient: HttpClient,
    private store: Store<AppState>
  ) { }

  getAllRecipes() {
    return this.httpClient.get(baseUrl + '.json')
      .pipe(map((res: Response) => {
        const ids = Object.keys(res)
        const recipes: RecipeListItemModel[] = []
        for (const i of ids) {
          recipes.push(new RecipeListItemModel(i, res[i].name, res[i].imagePath, res[i].description))
        }
        // return recipes
        this.store.dispatch(new GetAllRecipes(recipes))
    }))
  }

  createRecipe(body: RecipeCreateModel) {
    return this.httpClient.post(baseUrl + '.json', body)
  }

  getById(recipeId: string) {
    return this.httpClient.get<RecipeListItemModel>(baseUrl + recipeId + '/.json').pipe(map((recipe: RecipeListItemModel) => {
      this.store.dispatch(new GetRecipeDetails(recipe))
    }))
  }

  editRecipe(body) {
    return this.httpClient.patch(baseUrl + '.json', body)
  }

  deleteRecipeById(recipeId: string) {
    return this.httpClient.delete(baseUrl + recipeId + '/.json')
  }
}