import { Component, OnInit, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SyncDataEditorService } from '../sync-data-editor.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
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
    public listUpdate: SyncDataEditorService,
    public snackBar: MatSnackBar
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
  // imageurl: this.data.result.imageurl,
  productSize: this.data.result.productSize,
   });

  }
  public buildForm() {
    this.userdata = this.form.group({
      productname: ['', [Validators.required]],

      productSize: ['', [Validators.required]],
      quant:['', [Validators.required,  Validators.pattern("^[0-9]*$")]],
      remaining: ['', [Validators.required,  Validators.pattern("^[0-9]*$")]],
      barcode: ['', [Validators.required]],
      price: ['', [Validators.required,  Validators.pattern("^[0-9]*$")]],
      // imageurl: ['', [Validators.required]],
    });
    
//    this.userdata.setValue({

//    lastName: 'def'
// });

    }
  newinventForm(ListId) {
    console.log(this.userdata.valid);
    this.userdata.value.id = ListId;
    if (this.userdata.valid) {
      this.http.put(environment.apiURL+'api/update/' + ListId, this.userdata.value)
      .subscribe((res) => {
        this.listUpdate.changeMessage(this.TransferDataSync);
        // let snackBarRef = this.snackBar.open('Product Updated!');
        this.snackBar.open('Product Updated!', 'Dismiss', {
          duration: 2000,
        });
      });

    } else {

    }


  }
  DeleteProduct(value) {
    this.http.delete<{message: string, list: any}>(environment.apiURL+'/api/delete/' + value)
    .subscribe(response => {
      alert(response.message);
      this.snackBar.open('Product Deleted!', 'Dismiss', {
        duration: 2000,
      });
    });

  }
}
