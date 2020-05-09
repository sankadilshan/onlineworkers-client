import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { error } from 'protractor';
import { Injectable } from "@angular/core";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor{

    intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
          .pipe(
              retry(2),
              catchError((error: HttpErrorResponse) => {
                 let errorMessage = "";
                 if(error.error instanceof ErrorEvent){
                    //client-side error
                    errorMessage = `Error code: ${error.status}\nmessage: ${error.message}`;
                 }else{
                     errorMessage= `Error code: ${error.status}\nmessage:${error.message}`;
                 }
                 
                 return throwError(errorMessage);
              })
          )
        
    }

}