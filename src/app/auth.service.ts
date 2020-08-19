import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthData, initData,Supplier,DeleteViaUniqueCode,authLive, authLiveToken,employeeDetails, DeleteTokenDate, UserCombinationData, getStore } from './signup/signup.model';

import { Subject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map, filter, switchMap } from 'rxjs/operators'
@Injectable({
    providedIn: "root"
})
export class AuthService {
    private token: any;
    private userDataForAllPages:any;
    private shopidUnique:any;
    private timerLog: NodeJS.Timer;
    loginStatus = false;

    private authStatusListener = new Subject<boolean>();
    // private getUserList=new Subject<boolean>();
    constructor(private http: HttpClient, private router: Router) {
        
      
    }
   
    getToken() {
        
        return this.getAuthData();
    }
    getSpecificToken()
    {
        let tokenLocal=localStorage.getItem('token');
        const tokenPass: authLiveToken = {token: tokenLocal};
        return tokenPass;
        }
        
    
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }
    createUser(firstname: string, lastname: string, phoneNumber: number, email: string, password: string) {

        const auth: initData = { firstname: firstname, lastname: lastname, phoneNumber: phoneNumber, email: email, password: password };
        this.http.post(environment.apiURL + "api/auth/signup", auth)
            .subscribe(resp => {
               
            })
    };
    deleteUserSupplierWay(Unique_id:string)
    {
        const auth: DeleteViaUniqueCode = {  unique_SHOP: Unique_id};
        this.http.post(environment.apiURL + "api/auth/removeUser", auth)
        .subscribe(resp => {
       
        })
     
    }
    createSupplier(firstname: string, lastname: string, storename: string, GST: string, Address1: string, Address2: string, city: string, State: string, Country: string,Zip:string, phoneNumber: number, email: string, password: string,usertype:number) {
      
        const auth: Supplier = { firstname: firstname, lastname: lastname,storename:storename, gst: GST,address1:Address1,
            address2:Address2,city:city,state:State,country:Country,zip:Zip,
            phoneNumber: phoneNumber, email: email, password: password,usertype:usertype };
           
        this.http.post(environment.apiURL + "api/auth/newSupplier", auth)
            .subscribe(resp => {
               
            })
    };
    getUser(): Observable<any> {
       
        const auth:UserCombinationData={storeId:this.shopidUnique,auth_type:this.userDataForAllPages}
      
        return this.http.post(environment.apiURL + "api/auth/getUser",auth);
       
    }

    login(email: string, password: string) {
       
        const auth: AuthData = { email: email, password: password };
        this.http.post<{name: string, token: string, unique_SHOP : string, expiresIn: number }>(environment.apiURL + "api/auth/login", auth)
            .subscribe(resp => {
            
                const userType=resp['usertype'];
                const shopid=resp['unique_SHOP'];
               
                const expiresInDuration = resp.expiresIn;
                const name=resp['name'];
                const token = resp['token'];
                this.token = token;
                this.setTimer(expiresInDuration);
                this.authStatusListener.next(true);
                const now = new Date();
                const expirationData = new Date(now.getTime() + expiresInDuration * 1000);
                this.saveAuthData(name,token, expirationData,shopid,userType);
                this.router.navigate(['/']);
            })
    }
    autoClearDBAuthToken()
    {
       const now = new Date();
      now.setHours(now.getHours() - 1);
        const auth: DeleteTokenDate = {  exp:now };
        this.http.post(environment.apiURL + "api/auth/removeUnwantedTokens", auth)
        .subscribe(resp => {
         
        })
    }
    autoAuthUser() {
        
       this.getAuthData().toPromise().then(res=>{
        
        if(res.list.length  != 0)
        {

            this.userDataForAllPages=res.list[0].auth_type;
            this.shopidUnique=res.list[0].auth_shopId;
            const now = new Date();
            const expiresIn = new Date(res.list[0].auth_expdate).getTime() - now.getTime();
            if (expiresIn > 0) {
                this.token = res.list[0].auth_token;
                this.setTimer(expiresIn / 1000);
                this.loginStatus = true;
                this.authStatusListener.next(true);
            }
        }
        });
        this.autoClearDBAuthToken();
        
      
    }
    logOut() {
        clearTimeout(this.timerLog);
        this.clearAuthData();

        this.authStatusListener.next(false);
        this.router.navigate(['/']);
    }
    statusAuth() {
        return this.loginStatus;

    }
    private saveAuthData(name:string,token: string, expirationData: Date,shopid : string,userType :Number) {
       
        const auth: authLive = {name:name, token: token, expirationData: expirationData,shopid:shopid,userType:userType };
        this.http.post(environment.apiURL + "api/auth/authLive", auth)
        .subscribe(resp=>{

        });
        this.userDataForAllPages=userType;
        this.shopidUnique=shopid;
        localStorage.setItem('name', name);
        localStorage.setItem('token', token);
        localStorage.setItem('shopid', shopid);
        localStorage.setItem('expirationData', expirationData.toISOString());
    }
    private clearAuthData() {
        let token=localStorage.getItem('token');
        if(token)
        {
            const tokenPass: authLiveToken = {token: token};
            this.http.post(environment.apiURL + "api/auth/RemoveauthLiveRequest",tokenPass)
            .subscribe(resp=>{
    
            });
        }
     
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        localStorage.removeItem('shopid');
        localStorage.removeItem('expirationData');
        this.loginStatus = false;
    }
    public  getAuthData(): Observable<any>  {
    
        let tokenLocal=localStorage.getItem('token');
        const tokenPass: authLiveToken = {token: tokenLocal};
        return this.http.post(environment.apiURL + "api/auth/authLiveRequest",tokenPass);
         
       
    }
    public getShopDetails(storeid:string):Observable<any>{
        let storeLocal=storeid;
        const storepass: getStore = {storeId: storeLocal};
        return this.http.post(environment.apiURL + "api/auth/storeDetails",storepass);
         
    }
    private setTimer(duration: number) {
        this.timerLog = setTimeout(() => {
            this.logOut();
        }, duration * 1000);
    }
    employeelist(firstname: string, lastname: string,  phoneNumber: number, email: string, password: string,usertype:number,unique_SHOP:number) {
      
        const auth: employeeDetails = { firstname: firstname, lastname: lastname,
            phoneNumber: phoneNumber, email: email, password: password,usertype:usertype,unique_SHOP:unique_SHOP };
           
        this.http.post(environment.apiURL + "api/auth/employees", auth)
            .subscribe(resp => {
              
            })
    };
}