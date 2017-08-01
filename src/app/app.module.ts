import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import {
    JQUERY_TOKEN,
    TOASTR_TOKEN,
    Toastr,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective
} from './common/index';
import {appRoutes} from './routes';
import {Error404Component} from './errors/404.component';
import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventResolverService,
    EventsListResolver,
    CreateSessionComponent,
    SessionListComponent,
    UpvoteComponent,
    DurationPipe,
    VoterService,
    LocationValidatorDirective
} from './events/index';
import {AuthService} from './user/auth.service';
declare const toastr: Toastr;
declare const jQuery: object;
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailsComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent,
        LocationValidatorDirective
    ],
    bootstrap: [EventsAppComponent],
    providers: [
        EventService,
        {
            provide: TOASTR_TOKEN,
            useValue: toastr
        },
        EventResolverService,
        {
            provide: JQUERY_TOKEN,
            useValue: jQuery
        },
        EventsListResolver,
        AuthService,
        VoterService
    ]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent) {
    if (component.isDirty) {
        const result = window.confirm('You have not saved this event, do you really want to cancel?');
        return result;
    }
    return true;
}
