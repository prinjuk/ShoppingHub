import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mimeType } from './mime-type-validator';
import {MatSnackBar} from '@angular/material/snack-bar';
import { environment } from '../../../../../../environments/environment';
@Injectable()
@Component({
  selector: 'app-addinventory',
  templateUrl: './addinventory.component.html',
  styleUrls: ['./addinventory.component.css']
})
export class AddinventoryComponent implements OnInit {
  Details: any;
  public userdata: FormGroup;
  constructor(public form: FormBuilder,  private http: HttpClient,public snackBar:MatSnackBar) { }
  SpecialImagePassing:any;
  ngOnInit(): void {
    this.buildForm();
  }
  // upload(e) {
  //   const element: HTMLElement = document.getElementById('uploadImage') as HTMLElement;
  //   element.click();
  // }
  onFileChange(input) {
    let data = '';
    let reader;

    if (input.srcElement.files[0] && (input.srcElement.value.endsWith('jpg') || input.srcElement.value.endsWith('png'))) {
   reader = new FileReader();
   this.SpecialImagePassing= input.srcElement.files[0] as File;
   debugger;
  //  console.log(test);
  //  this.userdata.patchValue({
  //   imageurl:test
  //  });
   reader.onload = (e: any) => {

    data = e.target.result;

   //  this.uploaded=true;
    const preview: HTMLElement = document.getElementById('preview') as HTMLElement;
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
      quant: ['', [Validators.required]],
      remaining: ['', [Validators.required]],
      barcode: ['', [Validators.required]],
      price: ['', [Validators.required]],
      // ,asyncValidators:[mimeType]
      imageurl: ['',{validators: [Validators.required]}],
      storeName: ['', [Validators.required]],
      brandName:  ['', [Validators.required]],
      productSize:   ['', [Validators.required]],
    });
//    this.userdata.setValue({

//    lastName: 'def'
// });

    }
  newinventForm(form: NgForm) {

    if (this.userdata.invalid) {
    return;
    } else {
      const preview: HTMLElement = document.getElementById('preview') as HTMLElement;
      // const imageUpload = preview.getAttribute('src');
      // this.userdata.value['imageurl'] = imageUpload;
      const PdtList=new FormData();
      PdtList.append('productname',this.userdata.value['productname'] );
      PdtList.append('storeid',this.userdata.value['storeid'] );
      PdtList.append('productid',this.userdata.value['productid'] );
      PdtList.append('quant',this.userdata.value['quant'] );
      PdtList.append('remaining',this.userdata.value['remaining'] );
      PdtList.append('barcode',this.userdata.value['barcode'] );
      PdtList.append('price',this.userdata.value['price'] );
      PdtList.append('storeName',this.userdata.value['storeName'] );
      PdtList.append('brandName',this.userdata.value['brandName'] );
      PdtList.append('productSize',this.userdata.value['productSize'] );
      PdtList.append('imageurl',this.SpecialImagePassing );

      const details = this.userdata.value;
      console.log(PdtList);
      
      const url = environment.apiURL+'newInvent';
      this.http.post<any>(url, PdtList).subscribe(res => {
        this.snackBar.open('Product Added!', 'Dismiss', {
          duration: 2000,
        });
        console.log(details);
        });
}

  }
}
