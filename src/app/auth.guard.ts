import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(public authservice:AuthService,private router:Router)
  {

  }
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean>
        {
            
            const isAuth=this.authservice.getToken();
            if(!isAuth)
            {
                
                this.router.navigate(['/login']);
            }
           return  Promise.resolve(true);
        }
    
}