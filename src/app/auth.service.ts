import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthData} from './signup/signup.model';
@Injectable({
    providedIn:"root"
})
export class AuthService {
constructor(private http:HttpClient)
{

}
createUser(email:string,password:string)
{
    const auth:AuthData={email:email,password:password};
this.http.post("http://localhost:3000/api/auth/signup",auth)
.subscribe(resp=>{
    console.log(resp);
})
}
}