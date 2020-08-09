import {  Pipe,PipeTransform  } from '@angular/core';
@Pipe({
    name:'replaceUserType'
})
export class replaceData implements PipeTransform{
    transform(value: number,replace:string) {
        switch(value)
        {
            case 0:   return "Admin";break;
            case 1:   return "Shop Employee";break;
            case 2:   return "Customer";break;
            case 3:   return "Shop Owner";break;
            default:return "unknown";
        }
    
        throw new Error("Method not implemented.");
    }
    
}