import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { CartDataService } from '../cart-data.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
  userIsAuthed=false;
  private authListenerSubs:Subscription;
  public searchData: FormGroup;
  productTransfer:any;
  constructor(public auth:AuthService, private router: Router,public form:FormBuilder,public search:CartDataService,public http:HttpClient) {}

  ngOnInit(): void {
    this.buildForm();
    this.authListenerSubs=this.auth.getAuthStatusListener()
    .subscribe(isAuth=>{
        this.userIsAuthed=isAuth;
    });
  }
  ngOnDestroy()
  {
    this.authListenerSubs.unsubscribe();
  }
  buildForm()
  {
    this.searchData = this.form.group({
      search:['']
    });
  }
  gosearch(e) {
    debugger;
    if(!this.searchData.invalid && this.searchData.value['search']=='')
    {
      this.searchData.patchValue({
        search:'Products from ShopHub'
      });
    }
    this.http.get<{message: string, list: any}>('http://localhost:3000/api/searchlist'+this.searchData.value['search'])
    .subscribe((res) => {

      this.productTransfer = res.list;
      const data = this.productTransfer;
      this.search.changesearch(data);
      this.router.navigate(['list']);
 
    

    });

    
  }
}
