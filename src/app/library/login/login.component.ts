import { HttpErrorResponse } from '@angular/common/http';
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
    error: string;
    isErrorExist: boolean;

    constructor(private apiService: HttpService, private router: Router) {
        this.isErrorExist = true;
    }

    Login(mail: string, password: string) {

        this.apiService.sendLoginData(mail, password).
            subscribe(x => this.router.navigate(['bookList']),
                err => {
                    if (err instanceof HttpErrorResponse) {
                        this.error = err.status.toString();
                        this.isErrorExist = false;
                    }
                });

    }

    ToSignUp() {

        this.router.navigate(['signin']);
    }

}