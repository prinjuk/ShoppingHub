import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DialogEditComponent } from '../updateinventory/dialog-edit/dialog-edit.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
@Component({
  selector: 'app-updateinventory',
  templateUrl: './updateinventory.component.html',
  styleUrls: ['./updateinventory.component.css']
})
export class UpdateinventoryComponent implements OnInit {
  Details: any;
  resultshown: any;
  resultjsonsearch: {};
  refined=[];

  constructor(public dialog: MatDialog, public form: FormBuilder,public http: HttpClient) { }
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
    let searchvalue = '';
    if (!this.productdata.invalid) {
      this.resultshown = 1;
      searchvalue = this.productdata.value.productsec;
      this.http.get<{message: string, list: any}>('http://localhost:3000/api/searchlist')
      .subscribe((res) => {
        debugger;
        this.resultjsonsearch = res.list;
        // const data = this.productTransfer;
        const resultSet = JSON.stringify(this.resultjsonsearch);


        this.refined=[];
        console.log(resultSet);
        for (const element of JSON.parse(resultSet)) {
          if (element.productname.toLowerCase().includes(searchvalue.toLowerCase())) {

            this.refined.push(element);
          }

       }

      });
    //   this.resultjsonsearch = [
    //     {
    //       name: 'LaysX',
    //       store: 'Kunnil',
    //       productid: '3FHT',
    //       QTYa: '146',
    //       QTYr: '12',
    //       Barcode: '649528789587',
    //       Priceper: '150',
    //       image: 'https://images.barcodesdatabase.org/file/barcodesdatabase/890/149/110/8901491101844.jpg'
    //     },   {
    //       name: 'LaysY',
    //       store: 'Kunnil',
    //       productid: '3FHT',
    //       QTYa: '146',
    //       QTYr: '12',
    //       Barcode: '649528789587',
    //       Priceper: '150',
    //       image: 'https://images.barcodesdatabase.org/file/barcodesdatabase/890/149/110/8901491101844.jpg'
    //     },   {
    //       name: 'LaysS',
    //       store: 'Kunnil',
    //       productid: '3FHT',
    //       QTYa: '146',
    //       QTYr: '12',
    //       Barcode: '649528789587',
    //       Priceper: '150',
    //       image: 'https://images.barcodesdatabase.org/file/barcodesdatabase/890/149/110/8901491101844.jpg'
    //     },   {
    //       name: 'Lays',
    //       store: 'Kunnil',
    //       productid: '3FHT',
    //       QTYa: '146',
    //       QTYr: '12',
    //       Barcode: '649528789587',
    //       Priceper: '150',
    //       image: 'https://images.barcodesdatabase.org/file/barcodesdatabase/890/149/110/8901491101844.jpg'
    //     },
    // ];



    }

  }

  opendialog(result) {

    this.dialog.open(DialogEditComponent, {data: {result}});
  }

}
