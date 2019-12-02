import { Book } from './../models/book.model';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { map } from 'rxjs/operators';


@Injectable()
export class HttpService{

    private connectionString:string="https://localhost:44329/";

    constructor( private http:HttpClient) {
    }

    getBookData():Observable<any>{
        
        return this.http.get(`${this.connectionString}api/getbook`);
    }
    getReaderData():Observable<any>{
        
        return this.http.get(`${this.connectionString}api/getreader`);
    }
}