import { NgModule } from "@angular/core";
import { RecipeCreateComponent } from "./recipe-create/recipe-create.component";
import { RecipeDetailsComponent } from "./recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RecipeRoutingModule } from "./recipe.routing";

@NgModule({
  declarations: [
    RecipeCreateComponent,
    RecipeDetailsComponent,
    RecipeEditComponent,
    RecipeListComponent,
    RecipeStartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RecipeRoutingModule
  ]
})
export class RecipeModule {  }