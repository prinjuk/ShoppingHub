import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Injectable } from '@angular/core';
@Injectable()
@Component({
  selector: 'app-addinventory',
  templateUrl: './addinventory.component.html',
  styleUrls: ['./addinventory.component.css']
})
export class AddinventoryComponent implements OnInit {
  Details: any;
  public userdata: FormGroup;
  constructor(public form: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }
  upload(e) {
    const element: HTMLElement = document.getElementById('uploadImage') as HTMLElement;
    element.click();
  }
  onFileChange(input) {
    let data = '';
    let reader;

    if (input.srcElement.files[0] && (input.srcElement.value.endsWith('jpg') || input.srcElement.value.endsWith('png'))) {
   reader = new FileReader();

   reader.onload = (e:any)=>{

    data = e.target.result;

   //  this.uploaded=true;
    let preview: HTMLElement = document.getElementById('preview') as HTMLElement;
    preview.setAttribute('src', data);

   };

   reader.readAsDataURL(input.srcElement.files[0]);
 }
  }
  public buildForm() {
    this.userdata = this.form.group({
      productname: ['', [Validators.required]],
      storeid: ['', [Validators.required]],
      productid: ['', [Validators.required]],
      quant: ['', [Validators.required, Validators.pattern('[0-9]')]],
      remaining: ['', [Validators.required, Validators.pattern('[0-9]')]],
      barcode: ['', [Validators.required]],
      price: ['', [Validators.required, Validators.pattern('[0-9]')]],
      imageurl: ['', [Validators.required]],
    });
//    this.userdata.setValue({

//    lastName: 'def'
// });

    }
  newinventForm(form: NgForm) {
    if (form.invalid) {
    return;
    }
    const details = this.Details = {
      productname: form.value.productname,
      store: form.value.storeid,
      productid: form.value.productid,
      quant: form.value.quant,
      remaining: form.value.remaining,
      barcode: form.value.barcode,
      price: form.value.price,
      imageurl: form.value.imageurl,
    };
    console.log(details);
  }
}
