import { Component, OnInit } from '@angular/core';
import { RecipeCreateModel } from '../models/recipe-create.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { ToastrService } from 'ngx-toastr';
import { Store, select } from '../../../../node_modules/@ngrx/store';
import { AppState } from '../../store/app.state';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  bindingModel: RecipeCreateModel
  id: string

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router,
    private toastrService: ToastrService,
    private store: Store<AppState>
  ) {  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.recipeService.getRecipeToEditById(this.id).subscribe(() => {
      this.store.pipe(select(state => state.recipes.toEdit)).subscribe((recipeToEdit) => {
        // console.log('recipeToEdit: ')
        // console.log(recipeToEdit)
        this.bindingModel = recipeToEdit
      })
    })
  }

  edit() {
    const body = { [this.id]: this.bindingModel };
    this.recipeService.editRecipe(body).subscribe((data) => {
      this.toastrService.success('Recipe edited successfully.', 'Success')
      this.router.navigate(['/recipes/list'])
    })
  }

}
