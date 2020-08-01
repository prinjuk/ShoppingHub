import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthData} from './signup/signup.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Injectable({
    providedIn:"root"
})
export class AuthService {
    private token:any;
    private timerLog:NodeJS.Timer;
    loginStatus=false;
    private authStatusListener=new Subject<boolean>();
constructor(private http:HttpClient,private router:Router)
{

}
getToken()
{
    return this.token;
}
getAuthStatusListener()
{
    return this.authStatusListener.asObservable();
}
        createUser(email:string,password:string)
        {
            const auth:AuthData={email:email,password:password};
        this.http.post(environment.apiURL+"api/auth/signup",auth)
        .subscribe(resp=>{
            console.log(resp);
        })
        }
        login(email:string,password:string)
        {
            const auth:AuthData={email:email,password:password};
            this.http.post<{token:string,expiresIn:number}>(environment.apiURL+"api/auth/login",auth)
            .subscribe(resp=>{
              debugger;
               const expiresInDuration=resp.expiresIn;
          
                const token=resp['token'];
                this.token=token;
                this.setTimer(expiresInDuration);
                this.authStatusListener.next(true);
                const now= new Date();
                const expirationData=new Date(now.getTime()+ expiresInDuration* 1000);
                this.saveAuthData(token,expirationData);
                this.router.navigate(['/']);
            })
        }
        autoAuthUser()
        {
            const authInfo=this.getAuthData();
            const now=new Date();
            const expiresIn=authInfo.expirationData.getTime()- now.getTime();
            if(expiresIn >0)
            {
                this.token=authInfo.token;
                this.setTimer(expiresIn/1000);
                this.loginStatus=true;
                this.authStatusListener.next(true);
            }
        }
        logOut()
        {
            clearTimeout(this.timerLog);
            this.clearAuthData();

            this.authStatusListener.next(false);
            this.router.navigate(['/']);
        }
        statusAuth()
        {
            return this.loginStatus;
            
        }
        private saveAuthData(token:string,expirationData: Date) {
            localStorage.setItem('token',token);
            localStorage.setItem('expirationData',expirationData.toISOString());
        }
        private clearAuthData() {
            localStorage.removeItem('token');
            localStorage.removeItem('expirationData');
            this.loginStatus=false;
        }
        private getAuthData() {
            const token=localStorage.getItem('token');
            const expirationData=localStorage.getItem('expirationData');
            if(!token || !expirationData)
            {
                return
            }
            return {
                token:token,
                expirationData: new Date(expirationData)
            }
        }

        private setTimer(duration: number) {
            this.timerLog=setTimeout(() => {
                this.logOut();
            }, duration*1000);
        }
}