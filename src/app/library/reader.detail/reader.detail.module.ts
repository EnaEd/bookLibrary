import { NgModule } from "@angular/core";
import { ReaderDetailComponent } from './reader.detail.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports:[BrowserModule],
    declarations:[ReaderDetailComponent],
    exports:[ReaderDetailComponent]
})
export class ReaderDetailModule{}