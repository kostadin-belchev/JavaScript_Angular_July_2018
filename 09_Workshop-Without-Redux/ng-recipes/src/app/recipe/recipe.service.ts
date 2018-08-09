import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RecipeListItemModel } from './models/recipe-list-item.model';
import { RecipeCreateModel } from './models/recipe-create.model';

const baseUrl = 'https://ng-recipes-cb703.firebaseio.com/recipes/'

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  getAllRecipes() {
    return this.httpClient.get(baseUrl + '.json')
      .pipe(map((res: Response) => {
        const ids = Object.keys(res)
        const recipes: RecipeListItemModel[] = []
        for (const i of ids) {
          recipes.push(new RecipeListItemModel(i, res[i].name, res[i].imagePath, res[i].description))
        }
        return recipes
    }))
  }

  createRecipe(body: RecipeCreateModel) {
    return this.httpClient.post(baseUrl + '.json', body)
  }

  getById(recipeId: string) {
    return this.httpClient.get<RecipeListItemModel>(baseUrl + recipeId + '/.json')
  }

  editRecipe(body) {
    return this.httpClient.patch(baseUrl + '.json', body)
  }

  deleteRecipeById(recipeId: string) {
    return this.httpClient.delete(baseUrl + recipeId + '/.json')
  }
}