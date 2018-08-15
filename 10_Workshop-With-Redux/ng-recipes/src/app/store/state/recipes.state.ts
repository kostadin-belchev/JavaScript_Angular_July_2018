import { RecipeListItemModel } from "../../recipe/models/recipe-list-item.model";
import { RecipeCreateModel } from "../../recipe/models/recipe-create.model";

export interface RecipesState {
  all: RecipeListItemModel[]
  details: RecipeListItemModel,
  toEdit: RecipeCreateModel
}