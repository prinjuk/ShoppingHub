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

const ELEMENT_DATA: StoreList[] = [ ];

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {


  displayedColumns: string[] = ['email', 'firstname', 'lastname', 'phone','usertype'];
  dataUser = ELEMENT_DATA;
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
    
    this.auth.getUser().subscribe((res)=>{
      // console.log(res.list);
      this.dataUser=res.list;
    });

  }

  onLogin(form)
  {
    if(!form.invalid)
    {
      // console.log(form.value.firstname, form.value.lastname, form.value.storename, form.value.GST
      //   , form.value.Address1, form.value.Address2, form.value.city, form.value.State, form.value.Country,form.value.Zip,
      //   form.value.phoneNumber, form.value.email, form.value.passid);
      debugger;
  this.auth.createSupplier(form.value.firstname, form.value.lastname, form.value.storename, form.value.GST
    , form.value.Address1, form.value.Address2, form.value.city, form.value.State, form.value.Country,form.value.Zip,
    form.value.phoneNumber, form.value.email, form.value.passid);
  
    }
  }
}
