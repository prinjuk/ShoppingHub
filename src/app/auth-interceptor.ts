import { HttpInterceptor,HttpRequest, HttpHandler } from '@angular/common/http';
import { Injector, Injectable } from '@angular/core';
import { AuthService } from './auth.service';
@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
    constructor(private auth:AuthService)
    {

    }
    intercept(req: HttpRequest<any>,next:HttpHandler)
    {
        //edting req and adding and sending
       debugger;
        const authToken=this.auth.getToken();
   
        const authRequest=req.clone({
            headers: req.headers.set('authorization','Bearer '+authToken)
        });
        // console.log(authRequest);
        return next.handle(authRequest);
    }
}