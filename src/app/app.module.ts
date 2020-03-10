import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'ngx-bootstrap/accordion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { WatchingListComponent } from './watching-list/watching-list.component';
import { MessagesComponent } from './messages/messages.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MoviesComponent,
    MovieDetailComponent,
    WatchingListComponent,
    MessagesComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    AccordionModule.forRoot()
  ],
  providers: [SearchComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppBootstrapModule {}
