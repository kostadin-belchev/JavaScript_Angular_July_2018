import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import components here
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesComponent } from './movies/movies.component';

// declare and array of objects to hold the path and associate it with a component
const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailComponent },
];

// @NgModule({
//   declarations: [
//     MoviesComponent,
//     MovieDetailComponent,
//   ],
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
// export class AppRoutingModule { }

export const routedComponents: ModuleWithProviders = RouterModule.forRoot(routes)