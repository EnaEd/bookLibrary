import { StaticDataSource } from './static.data.source';
import { NgModule } from '@angular/core';
import { ReaderRepository } from '../repositories/reader.repository';

@NgModule({
    providers:[ReaderRepository,StaticDataSource]
})
export class ReaderModule{}