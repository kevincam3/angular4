import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventsListResolver,
    CreateSessionComponent,
    EventResolverService
} from './events/index';
import {Routes} from '@angular/router';
import {Error404Component} from './errors/404.component';

export let appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, resolve: [{event: EventResolverService}]},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '404', component: Error404Component},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'},
];
