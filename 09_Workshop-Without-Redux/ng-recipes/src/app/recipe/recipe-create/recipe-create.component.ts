import { Component, OnInit } from '@angular/core';
import { RecipeCreateModel } from '../models/recipe-create.model';
import { RecipeService } from '../recipe.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.css']
})
export class RecipeCreateComponent implements OnInit {
  model: RecipeCreateModel

  constructor(
    private recipeService: RecipeService,
    private toastrService: ToastrService,
    private router: Router
  ) {
    this.model = new RecipeCreateModel('', '', '')
  }

  ngOnInit() {
  }

  createRecipe() {
    this.recipeService.createRecipe(this.model).subscribe(() => {
      this.toastrService.success('Recipe added successfully.', 'Success')
      this.router.navigate(['/recipes/list'])
    })
  }

}
