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
export interface DeleteTokenDate{
    
    exp:Date,
   
}
export interface authLive{
    name:string,
    token:string,
    expirationData:Date,
    shopid:string,
    userType:Number
}
export interface employeeDetails{
    firstname: string,
    lastname: string,
  
    phoneNumber: number,
    email: string,
   
    password: string,
    usertype:number,
    unique_SHOP: number,
       
}
export interface UserCombinationData{
  
    storeId:string,
    auth_type:number
   
   
}
export interface getStore{
    storeId:string,
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
export interface address{
    firstname: string,
    lastname: string,
  
    phone: number,
 
    address1: string,
    address2: string,
    city: string,
    state: string,
    country: string,
    zip: string,
   
  
     
}
export interface orderDetails{
   

     orders:any
}