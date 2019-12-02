import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { tap } from 'rxjs/internal/operators'

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const request = req.clone(/*here add params like headers:req.headers.set()*/)
        return next.handle(request).pipe(
            tap(event => {//for catch responce
                if (event instanceof HttpResponse) {
                    console.log('Server response');
                }
                err => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status == 401) {
                            console.log('Unauthorized');
                        }
                    }
                }
            })
        );
    }

}