import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[LoginComponent],
    exports:[LoginComponent]

})
export class LoginModule{
}