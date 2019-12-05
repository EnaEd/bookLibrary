import { Component } from "@angular/core";
import {Location} from "@angular/common";

@Component({
    selector:'signIn',
    templateUrl:'signin.component.html'
})
export class SigninComponent{
    
    constructor(private location:Location) {}

    OnBack(){
        this.location.back();
    }
}