import { ReaderListComponent } from './reader.list.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReaderModule } from './../models/reader.module';
import { NgModule } from '@angular/core';
import { from } from 'rxjs';

@NgModule({
imports:[ReaderModule,BrowserModule],
declarations:[ReaderListComponent],
exports:[ReaderListComponent]
})
export class ReaderListModule{}