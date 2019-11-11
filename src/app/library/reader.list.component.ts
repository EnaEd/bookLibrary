import { ReaderRepository } from './../repositories/reader.repository';
import { Component } from "@angular/core";
import { Reader } from '../models/reader';

@Component({
    selector: "readerList",
    templateUrl:"reader.list.component.html"
})
export class ReaderListComponent{
    
    constructor(private readerRepository:ReaderRepository) {
        
    }

    get Readers():Reader[]{
        return this.readerRepository.getReaders();
    }
}