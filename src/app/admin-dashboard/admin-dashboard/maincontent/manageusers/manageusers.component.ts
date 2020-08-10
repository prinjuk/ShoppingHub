import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth.service';

export class StoreList {
  public name: string;
  public Id: number;
  public desc: string;
public routerLink:string;
  public lastlogin: string;
  public JoinedOn: string;
}
interface user_type {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: StoreList[] = [ ];

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {

  userType: user_type[] = [
    {value: '3', viewValue: 'Shop Administrator'},
    {value: '1', viewValue: 'Employee'},
  
  ];
  displayedColumns: string[] = ['email', 'firstname', 'lastname', 'phone','usertype','Action'];
  dataUser = ELEMENT_DATA;
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
    
    this.auth.getUser().subscribe((res)=>{
   console.log(res.list);
      this.dataUser=res.list;
    });

  }
  DeleteEntry(e)
  {
   this.auth.deleteUserSupplierWay(e);
  }
  onLogin(form)
  {
    if(!form.invalid)
    {
    
   
  this.auth.createSupplier(form.value.firstname, form.value.lastname, form.value.storename, form.value.GST
    , form.value.Address1, form.value.Address2, form.value.city, form.value.State, form.value.Country,form.value.Zip,
    form.value.phoneNumber, form.value.email, form.value.passid,form.value.usertype);
  
    }
  }
}
