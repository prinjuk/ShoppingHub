import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { CartDataService } from '../cart-data.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public searchData: FormGroup;

  constructor(private router: Router,public form:FormBuilder,public search:CartDataService) {}

  ngOnInit(): void {
    this.buildForm();
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
    
    this.search.changesearch(this.searchData);
   
    this.router.navigate(['list']);
  }
}
