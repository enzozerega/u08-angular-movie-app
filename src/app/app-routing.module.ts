import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { WatchingListComponent } from './watching-list/watching-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';

const routes: Routes = [

  { path: 'movie/detail/:id', component: MovieDetailComponent },
  { path: 'person/detail/:id', component: PersonDetailComponent },
  { path: 'discover', component: MoviesComponent },
  { path: 'mylist', component: WatchingListComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
