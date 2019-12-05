import { FormsModule } from '@angular/forms';
import { Component } from "@angular/core";
import { HttpService } from 'src/app/services/http.service';


@Component({
    selector: "login",
    templateUrl: "login.component.html"
})
export class LoginComponent {
    email: string ;
    password: string;

    constructor(private apiService:HttpService) {
    }

    Login(mail:string,password:string){
        this.apiService.sendLoginData(mail,password).subscribe(x=>console.log(x));
    }

}