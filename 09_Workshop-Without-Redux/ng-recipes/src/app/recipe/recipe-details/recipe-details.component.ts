import { Component, OnInit } from '@angular/core';
import { RecipeListItemModel } from '../models/recipe-list-item.model';
import { RecipeService } from '../recipe.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe$: Observable<RecipeListItemModel>
  recipeId: string

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.recipeId = this.route.snapshot.params['id']
    this.recipe$ = this.recipeService.getById(this.recipeId)
    // console.log(this.recipe$)
  }

  deleteRecipe(recipeIdToDelete: string) {
    // console.log('TODO delete')
    this.recipeService.deleteRecipeById(recipeIdToDelete).subscribe(data => {
      // console.log(data)
      this.toastrService.success('Item deleted successfully.', 'Success')
      this.router.navigate(['/recipes/list'])
    }, err => {
      this.toastrService.error(err.message, 'Warning')
    })
  }

}
