import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { HttpService } from 'src/app/services/http.service';

@Component({
    selector: 'signIn',
    templateUrl: 'signin.component.html'
})
export class SigninComponent {

    name: string;
    login: string;
    password: string;
    confirmPassword: string;

    constructor(private location: Location, private apiService: HttpService) { }

    OnBack() {
        this.location.back();
    }
    SignUp(name: string, login: string, password: string) {

        this.apiService.sendSignUpData(name, login, password).subscribe(x=>x);
    }
}