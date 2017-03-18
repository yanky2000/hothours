import { Routes } from '@angular/router';
import { EventsResolverService } from './events/shared/events-resolver.service';
import { EventsListComponent } from './events/shared/events-list/events-list.component';


export const appRoutes:Routes = [
    { path: 'events', component: EventsListComponent, resolve: {events: EventsResolverService}},
    { path: '', redirectTo: '/events', pathMatch: 'full'}


    
]