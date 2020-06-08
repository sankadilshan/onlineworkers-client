import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, retryWhen } from 'rxjs/operators';
import { error } from 'protractor';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private _route: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('http error handler interceptor')
    return next.handle(req)
      .pipe(
        catchError((error:HttpErrorResponse) => {
          if (error instanceof HttpErrorResponse && error.status == 401) {
            // return this.handle401Error(error);
            return throwError(error)
          }
          else if (error instanceof HttpErrorResponse) {
            console.log(error)
            return throwError(`ERROR CODE CLIENT : ${error.status} message`)
          }
          else {
            return throwError(`ERROR CODE SERVER: ${error}`);
          }

        })

      )
  }
  private handle401Error(error: HttpErrorResponse) {
    return throwError(error.status)
  }
}