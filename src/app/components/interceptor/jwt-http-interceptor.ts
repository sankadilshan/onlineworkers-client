import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Injectable()
export class JwtHttpInterceptor implements HttpInterceptor {

    constructor(private _authService: AuthenticationService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<import("@angular/common/http").HttpEvent<any>> {
       
        if (this._authService.getJwtToken()) {
            req = this.setheader(req, this._authService.getJwtToken())
        }
        return next.handle(req)
    }

    private setheader(req: HttpRequest<any>, token: string) {
        return req.clone({
            setHeaders: { 'Authorization': `Bearer ${token}` }
        })
    }

}