import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component } from "@angular/core";
import { HttpService } from 'src/app/services/http.service';


@Component({
    selector: "login",
    templateUrl: "login.component.html"
})
export class LoginComponent {
    email: string;
    password: string;

    constructor(private apiService: HttpService, private router: Router) {
    }

    Login(mail: string, password: string) {
        this.apiService.sendLoginData(mail, password).subscribe(x => console.log(x));
    }
    ToSignUp() {
        this.router.navigate(['signin']);
    }

}