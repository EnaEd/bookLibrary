import { HttpService } from './services/http.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})


export class AppComponent {
 
 constructor(public apiService:HttpService) {
 }
}
