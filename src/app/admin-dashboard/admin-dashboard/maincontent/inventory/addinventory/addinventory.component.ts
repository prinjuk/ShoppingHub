import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  constructor(public form: FormBuilder,  private http: HttpClient) { }

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
      imageurl: ['', [Validators.required]],
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
      const imageUpload = preview.getAttribute('src');
      this.userdata.value['imageurl'] = imageUpload;



      const details = this.userdata.value;
      console.log(details);
      const url = 'http://localhost:3000/newInvent';
      this.http.post<any>(url, details).subscribe(res => {

        console.log(details);
        });
}

  }
}
