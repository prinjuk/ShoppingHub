export interface initData{
    firstname:string,
    lastname:string,
    phoneNumber:number,
    email:string,
    password:string,
  
}
export interface AuthData{
    
    email:string,
    password:string,
}
export interface DeleteViaUniqueCode{
    
    unique_SHOP:string,
   
}
export interface authLive{
    name:string,
    token:string,
    expirationData:Date,
    shopid:string,
   
}
export interface authLiveToken{
  
    token:string,
   
   
}
export interface Supplier{
    firstname: string,
    lastname: string,
    storename: string,
    gst: string,
    phoneNumber: number,
    email: string,
    address1: string,
    address2: string,
    city: string,
    state: string,
    country: string,
    zip: string,
    password: string,
    usertype: number,
  
}