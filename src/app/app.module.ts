import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';


import { EventsService } from './events/shared/events.service';
import { EventsResolverService } from './events/shared/events-resolver.service';
import { appRoutes } from './routes';
import { EventsListComponent } from './events/shared/events-list/events-list.component';
import { EventThumbnailComponent } from './events/shared/event-thumbnail/event-thumbnail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    EventsListComponent,
    EventThumbnailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventsService,
    EventsResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
