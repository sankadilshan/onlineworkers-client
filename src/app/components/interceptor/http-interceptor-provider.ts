import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtHttpInterceptor } from './jwt-http-interceptor';
import { HttpErrorInterceptor } from 'src/app/ex-handle/http-error.interceptor';

export const httpInterceptorProviders=[
    {provide: HTTP_INTERCEPTORS,useClass:JwtHttpInterceptor,multi:true},
    // {provide: HTTP_INTERCEPTORS,useClass:HttpErrorInterceptor,multi:true}
]