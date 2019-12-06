import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { tap, map } from 'rxjs/internal/operators'

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const request = localStorage.getItem('access_token') ?
            req.clone({ setHeaders: { 'Authorization': `Bearer ${localStorage.getItem('access_token')}` } }) :
            req.clone(/*here add params like headers:req.headers.set()*/);

        return next.handle(request).pipe(
            tap(event => {//for catch response from server
                if (event instanceof HttpResponse) {
                    if (event.body['access_token']) {
                         localStorage. removeItem('access_token');
                         localStorage.setItem('access_token', event.body['access_token'])
                    }
                }
            },
            err => {//if need preprocessing
                if (err instanceof HttpErrorResponse) {
                }
            })
        );
    }

}