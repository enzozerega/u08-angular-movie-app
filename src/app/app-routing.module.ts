import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { WatchingListComponent } from './watching-list/watching-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [

  { path: 'discover', component: MoviesComponent },
  { path: 'mylist', component: WatchingListComponent },
  { path: 'movie/detail/:id', component: MovieDetailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
