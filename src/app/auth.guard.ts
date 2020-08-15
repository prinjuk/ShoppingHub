import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { map, filter, switchMap } from 'rxjs/operators'
@Injectable()
export class AuthGuard implements CanActivate{
  constructor(public authservice:AuthService,private router:Router)
  {

  }
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean>
        {
        
            return this.authservice.getToken().pipe(
                map((res) =>
                {  
                    if(res.list.length)
                    return true
                    else
                    return false
                }));
           
        }
    
}