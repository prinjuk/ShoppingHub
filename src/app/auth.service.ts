import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthData} from './signup/signup.model';
import { Subject } from 'rxjs';
@Injectable({
    providedIn:"root"
})
export class AuthService {
    private token:any;
    private authStatusListener=new Subject<boolean>();
constructor(private http:HttpClient)
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
        this.http.post("http://localhost:3000/api/auth/signup",auth)
        .subscribe(resp=>{
            console.log(resp);
        })
        }
        login(email:string,password:string)
        {
            const auth:AuthData={email:email,password:password};
            this.http.post("http://localhost:3000/api/auth/login",auth)
            .subscribe(resp=>{
                debugger;
                console.log(resp['token']);
                const token=resp['token'];
                this.token=token;
                this.authStatusListener.next(true);
            })
        }
}