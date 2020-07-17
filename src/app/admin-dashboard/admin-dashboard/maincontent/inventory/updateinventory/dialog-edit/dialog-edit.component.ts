import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SyncDataEditorService } from '../sync-data-editor.service';
@Injectable()
@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.css']
})
export class DialogEditComponent implements OnInit {
  Details: any;
  ListId = '';
  TransferDataSync: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public form: FormBuilder,
    public http: HttpClient,
    public listUpdate: SyncDataEditorService
      ) { }
  public userdata: FormGroup;
  ngOnInit(): void {
    this.listUpdate.currentMessage.subscribe(message => this.TransferDataSync = message);
    this.buildForm();
    this.ListId = this.data.result._id;
    console.log(this.data);
    this.userdata.patchValue({
  productname: this.data.result.productname,
  storeid: this.data.result.storeid,
  productid: this.data.result.productid,
  quant: this.data.result.quant,
  remaining: this.data.result.remaining,
  barcode: this.data.result.barcode,
  price: this.data.result.price,
  imageurl: this.data.result.imageurl,
  productSize: this.data.result.productSize,
   });

  }
  public buildForm() {
    this.userdata = this.form.group({
      productname: ['', [Validators.required]],

      productSize: ['', [Validators.required]],
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
  newinventForm(ListId) {
    console.log(this.userdata.valid);
    this.userdata.value.id = ListId;
    if (this.userdata.valid) {
      this.http.put('http://localhost:3000/api/update/' + ListId, this.userdata.value)
      .subscribe((res) => {
        this.listUpdate.changeMessage(this.TransferDataSync);

      });

    } else {

    }


  }
  DeleteProduct(value) {
    this.http.delete<{message: string, list: any}>('http://localhost:3000/api/delete/' + value)
    .subscribe(response => {
      alert(response.message);
    });

  }
}
