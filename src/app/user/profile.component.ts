import {Component, OnInit, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from './auth.service';
import {Router} from "@angular/router";
import {TOASTR_TOKEN} from "../common/toastr.service";
import {Toastr} from '../common/toastr.interface';

@Component({
    templateUrl: './profile.component.html',
    styles:[`
        em{float:right; color:#E05C65; padding-left: 10px}
        .error input{background-color: #E3C3C5;}
        .error ::-webkit-input-placeholder{color:#999;}
        .error ::-moz-placeholder{color:#999;}
        .error :-moz-placeholder{color:#999;}
        .error :-ms-input-placeholder{color:#999;}
    `]
})

export class ProfileComponent implements OnInit{
    profileForm:FormGroup;

    constructor(private authService:AuthService, private router:Router, @Inject(TOASTR_TOKEN) private toastr:Toastr ){

    }

    ngOnInit(){
        this.profileForm = new FormGroup({
            firstName: new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')]),
            lastName: new FormControl(this.authService.currentUser.lastName, [Validators.required])
        })
    }

    cancel(){
        this.router.navigate(['events']);
    }

    saveProfile(formValues){
        if(this.profileForm.valid) {
            this.authService.updateCurrentUser(formValues.firstName, formValues.lastName);
            this.toastr.success('Profile Saved');
        }
        
    }

    validateFirstName(){
        return this.profileForm.get('firstName').valid || this.profileForm.get('firstName').untouched
    }
    
    validateLastName(){
        return this.profileForm.get('lastName').valid || this.profileForm.get('lastName').untouched
    }
}