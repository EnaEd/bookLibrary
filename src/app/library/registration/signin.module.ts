import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { SigninComponent } from './signin.component';

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[SigninComponent],
    exports:[SigninComponent]
})
export class SigninModule{}