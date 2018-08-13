import { RecipeListItemModel } from "../../recipe/models/recipe-list-item.model";

export interface RecipesState {
  all: RecipeListItemModel[]
  details: RecipeListItemModel
}