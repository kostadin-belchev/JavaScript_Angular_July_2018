import { Action } from "@ngrx/store";
import { RecipeListItemModel } from "../../recipe/models/recipe-list-item.model";

export const GET_ALL_RECIPES = '[RECIPES] Get All'
export const GET_RECIPE_DETAILS = '[RECIPES] Get Details'

export class GetAllRecipes implements Action {
  type: string = GET_ALL_RECIPES
  constructor(public payload: RecipeListItemModel[]) {  }
}

export class GetRecipeDetails implements Action {
  type: string = GET_RECIPE_DETAILS
  constructor(public payload: RecipeListItemModel) {  }
}

export type Types = GetAllRecipes | GetRecipeDetails