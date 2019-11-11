import { StaticDataSource } from './../models/static.data.source';
import { Reader } from './../models/reader';
import { Injectable } from "@angular/core";

@Injectable()
export class ReaderRepository {
    private readers: Reader[]=[];

    constructor(private dataSource: StaticDataSource) {
        dataSource.getReaders().subscribe(data => {
            this.readers = data;
        });
    }
    getReaders(){
        return this.readers;
    }
}