import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeCreateComponent } from './recipe/recipe-create/recipe-create.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'auth', children: [
    { path: 'signup', component: SignUpComponent },
    { path: 'signin', component: SignInComponent }

  ] },
  { path: 'recipes', children: [
    { path: '', pathMatch: 'full', component: RecipeStartComponent },
    { path: 'create', component: RecipeCreateComponent },
    { path: 'details/:id', component: RecipeDetailsComponent },
    { path: 'edit/:id', component: RecipeEditComponent },
    { path: 'list', component: RecipeListComponent },
  ], canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }