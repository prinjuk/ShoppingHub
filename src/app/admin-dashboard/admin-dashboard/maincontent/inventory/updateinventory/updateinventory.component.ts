import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DialogEditComponent } from '../updateinventory/dialog-edit/dialog-edit.component';
import { Injectable } from '@angular/core';
import { AuthService } from '../../../../../auth.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable()
@Component({
  selector: 'app-updateinventory',
  templateUrl: './updateinventory.component.html',
  styleUrls: ['./updateinventory.component.css']
})
export class UpdateinventoryComponent implements OnInit {
  Details: any;
  creator:any;
  resultshown: any;
  resultjsonsearch: {};
  refined=[];

  constructor(public dialog: MatDialog, public form: FormBuilder,public http: HttpClient,public auth:AuthService) { }
  public productdata: FormGroup;
  ngOnInit(): void {
  this.builtform();
 
  }
  builtform() {
    this.productdata = this.form.group({
      productsec : ['', [Validators.required]],

    });
  }
  searchinit(form: NgForm) {
    let searchvalue ;
    if (!this.productdata.invalid) {
      this.resultshown = 1;
      // searchvalue = this.productdata.value.productsec;
      searchvalue = {productname: this.productdata.value.productsec};
      console.log(searchvalue)
      debugger;
      this.http.post<{message: string, list: any}>(environment.apiURL+'api/filterSearch/', searchvalue)
      .subscribe((res) => {

        this.resultjsonsearch = res.list;
        // const data = this.productTransfer;
        const resultSet = JSON.stringify(this.resultjsonsearch);


        this.refined= [];
        console.log(resultSet);
        for (const element of JSON.parse(resultSet)) {
          if (element.productname.toLowerCase().includes(searchvalue['productname'].toLowerCase())) {

            this.refined.push(element);
          }

       }

      });
  


    }

  }

  opendialog(result) {

    this.dialog.open(DialogEditComponent, {data: {result}});
  }

}
