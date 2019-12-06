import { HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from "@angular/core";
import { HttpService } from 'src/app/services/http.service';
import { switchMap } from 'rxjs/operators';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';


@Component({
    selector: "login",
    templateUrl: "login.component.html"
})
export class LoginComponent  {
    email: string;
    password: string;
    error: string;
    isErrorInvisible: boolean;

    constructor(private apiService: HttpService, private router: Router,private route: ActivatedRoute) {
        this.isErrorInvisible = true;
    }

    Login(mail: string, password: string) {

        this.apiService.sendLoginData(mail, password).
            subscribe(x => this.router.navigate(['bookList']),
                err => {
                    if (err instanceof HttpErrorResponse) {
                        this.error = err.status.toString();
                        this.isErrorInvisible = false;
                    }
                });

    }

    ToSignUp() {

        this.router.navigate(['signin']);
    }

}