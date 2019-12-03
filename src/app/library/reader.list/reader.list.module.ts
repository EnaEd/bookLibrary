import { ReaderListComponent } from './reader.list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';
import { ReaderModule } from 'src/app/models/reader.module';

@NgModule({
imports:[ReaderModule,BrowserModule],
declarations:[ReaderListComponent],
exports:[ReaderListComponent]
})
export class ReaderListModule{}