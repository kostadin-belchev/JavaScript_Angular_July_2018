import { Component, OnInit } from '@angular/core';
import { RecipeCreateModel } from '../models/recipe-create.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { ToastrService } from 'ngx-toastr';

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
    private toastrService: ToastrService
  ) {  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.recipeService.getById(this.id).subscribe(recipeToEdit => {
      // console.log('recipeToEdit: ')
      // console.log(recipeToEdit)
      this.bindingModel = recipeToEdit
    })
  }

  edit() {
    const body = { [this.id]: this.bindingModel };
    this.recipeService.editRecipe(body).subscribe((data) => {
      this.toastrService.success('Recipe edited successfully.', 'Sucess')
      this.router.navigate(['/recipes/list'])
    })
  }

}
