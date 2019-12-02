import { NgModule } from '@angular/core';
import { ReaderRepository } from '../repositories/reader.repository';
import { HttpService } from '../services/http.service';

@NgModule({
    providers:[ReaderRepository,HttpService]
})
export class ReaderModule{}