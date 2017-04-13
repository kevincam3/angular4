import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ISession} from '../shared/index';
import {EventService} from "../shared/event.service";

@Component({
    selector: 'create-session',
    templateUrl: './create-session.component.html',
    styles:[`
        em{float:right; color:#E05C65; padding-left: 10px}
        .error input, .error select, error textarea{background-color: #E3C3C5;}
        .error ::-webkit-input-placeholder{color:#999;}
        .error ::-moz-placeholder{color:#999;}
        .error :-moz-placeholder{color:#999;}
        .error :-ms-input-placeholder{color:#999;}
    `]
})
export class CreateSessionComponent implements OnInit{

    public newSessionForm: FormGroup
    @Output() public saveNewSession = new EventEmitter();
    @Output() public cancelAddSession = new EventEmitter();

    constructor(private eventService:EventService){

    }

    ngOnInit(){
        this.newSessionForm = new FormGroup({
            name: new FormControl('', [Validators.required]),
            presenter: new FormControl('', Validators.required),
            duration: new FormControl('', Validators.required),
            level: new FormControl('', Validators.required),
            abstract: new FormControl('', [Validators.required, Validators.maxLength(400)])
        })
    }

    saveSession(formValues){
        let session:ISession = {
            id: undefined,
            name: formValues.name,
            presenter: formValues.presenter,
            duration: +formValues.duration,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []
        }
        this.saveNewSession.emit(session);
    }

    cancel(){
        this.cancelAddSession.emit();
    }
    private noNameKevin(control:FormControl){
        let hasName = control.value.includes('Kevin') || control.value.includes('kevin');
        if(hasName){
            return {'noNameKevin': 'Kevin'};
        }
        return null;
    }
}