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
    
        const authToken=this.auth.getSpecificToken();
       
        const authRequest=req.clone({
            setHeaders: {
                authorization: `Bearer ${authToken.token}`
              }
         
        });
        
        
        return next.handle(authRequest);
    }
}