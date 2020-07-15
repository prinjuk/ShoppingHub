import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
@Injectable()
@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {
  Details: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public form: FormBuilder) { }
  public userdata: FormGroup;
  ngOnInit(): void {
this.buildForm();

console.log(this.data);
this.userdata.patchValue({
  productname: this.data['result']['productname'],
  storeid: this.data['result']['storeid'],
  productid: this.data['result']['productid'],
  quant: this.data['result']['quant'],
  remaining: this.data['result']['remaining'],
  barcode: this.data['result']['barcode'],
  price: this.data['result']['price'],
  imageurl: this.data['result']['imageurl'],

   });

  }
  public buildForm() {
    this.userdata = this.form.group({
      productname: ['', [Validators.required]],
      storeid: ['', [Validators.required]],
      productid: ['', [Validators.required]],
      quant: ['', [Validators.required]],
      remaining: ['', [Validators.required]],
      barcode: ['', [Validators.required]],
      price: ['', [Validators.required]],
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
