import { Component, OnInit, ViewChild, Renderer2, Input , AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { CartfooterComponent } from '../cartfooter/cartfooter.component';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { CartDataService } from '../cart-data.service';
declare var $: any;
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})

export class ListPageComponent implements OnInit, AfterViewInit  {
  constructor(
    private router: Router,
    private rendering: Renderer2,
    toasterService: ToasterService,
    public cartData: CartDataService,
    private sanitizer : DomSanitizer,
    private http: HttpClient) {
    this.toasterService = toasterService;
  }
  progressStatus=false;
  loadingdata=true;
  inCart = ``;
  searchQuery:any;
  productTransfer = {};
  productArray = [];
  arrayCart = [];
  productFilterArray = [];
 FinalArray = [];
  relatedStore = [];
  storelimit = 1;
  // this.relatedStore ='';
  productidTrans = '';
  Barcode = '';
  storename='';
  tempcommon = '';
  productBindImage = '';
  productBindName = '';
  productBindbrandName: '';
  productBindproductSize: '';
  productBindprice: '';
  productBindproductCommon: '';

  status = true;
 private toasterService: ToasterService;
@ViewChild(CartfooterComponent) child; // giving child to parent
// @ViewChild(PaymentsummaryComponent) payment;
parentMessage = []; // parent to child
  // tslint:disable-next-line: member-ordering
  @ViewChild('closebutton') closebutton;
  // tslint:disable-next-line: no-input-rename
  // tslint:disable-next-line: member-ordering
  @ViewChild('pdtCount') productCount;
  // selectStorePrice = 0;
  // tslint:disable-next-line: member-ordering
  finalprice = 0;
  pdtcount = 1;
  statusSelect = '';

// DataListPage




//
popToast() {
    this.toasterService.pop('success', 'Args Title', 'Args Body');
}

  ngOnInit(): void {
    debugger;
    this.cartData.currentMessage.subscribe((message) => 
    {
      this.arrayCart = message
    });
    this.cartData.currentsearch.subscribe(message=>{
      
      
      this.productArray=[];
      this.productFilterArray=[];
    
      this.searchQuery=message;
      this.productTransfer = this.searchQuery;
      const data = this.productTransfer;
      for (const key in data) {
        if (data.hasOwnProperty(key)) {

          this.productFilterArray.push(data[key]);

        }
  }

  // Filtering duplication: future filter on low price
  
      this.productFilterArray.forEach((element, indexz) => {
        debugger;
    let flag = 0;
    if (this.productArray.length == -1) {
        this.productArray.push(element);
      } else {
        this.productArray.forEach((value, index, element) => {

          if (element[index].barcode == this.productFilterArray[indexz].barcode) {
              flag = 1;

            }
        });
        if (flag != 1) {
          this.productArray.push(element);
        }
      }
      this.loadingdata=false;
      this.FinalArray=[...this.productArray];

    });
    });
    

    




    $('.btn-cart').click(() => {
    
      const code = this.Barcode;
      const store = this.statusSelect;
      const storeName = this.storename;
      const count = this.pdtcount;
      const price = this.finalprice;
      const title = this.productBindName;
      const objectTransfer = {
        product: {
          title,
          code,
          store,
          storeName,
          price,
          count,
        },
      };
      let flag = 0;


      this.arrayCart.forEach((element, index) => {
        debugger;
        if (element.product.code == objectTransfer.product.code && element.product.store == objectTransfer.product.store ) {
          flag = 1;

          element.product.count = objectTransfer.product.count;
          const priceToast = `${count} x ${objectTransfer.product.title} of ₹  ${count * price}`;
          const labelToast = `Successfully updated!`;
          this.toasterService.pop('success', labelToast, priceToast);
        }


      });
      if (flag == 0) {
        const priceToast = `${count} x ${objectTransfer.product.title} of ₹  ${count * price}`;
        const labelToast = `Successfully added! `;
        this.toasterService.pop('success', labelToast, priceToast);
        this.arrayCart.push(objectTransfer);
      }

      // this.parentMessage=labelToast;
      this.goProduct();
      this.cartUpdate();
    });


  }
  cartUpdate()  {
    debugger;
    this.parentMessage = this.arrayCart;
      // this.arrayCart.forEach((element,index,Array) => {
    this.cartData.changeMessage(this.arrayCart);
      // });
  }
  goProduct() {
    this.closebutton.nativeElement.click();

    // this.router.navigate(['detailpage']);
  }
  statusCartButton() {
    const value = this.pdtcount;
    // alert(value);
    if (value != 0) {
      const temp = value * Number(this.finalprice);
      $('.CartupdatePrice').html(temp);
    } else {
    }
  }

  hotelPlus(data) {

    const pdctCount = this.pdtcount;
    if (pdctCount != this.storelimit) {
      this.pdtcount++;
    }
    this.statusCartButton();
  }
imageConverter(base64data)
{
 return (this.sanitizer.bypassSecurityTrustUrl(base64data));
}
  hotelMinus(data) {
    let pdctCount = this.pdtcount;
    if (pdctCount < 2) {
      this.pdtcount = 1;
    } else {
      //  let value = Number(this.pdtcount);
      pdctCount--;
      this.pdtcount = pdctCount;
    }
    this.statusCartButton();
  }
  btnStoreChange(select, data,storename) {
debugger;
this.finalprice = data;
this.statusSelect = select;
this.storename=storename;
    // this.relatedStore=[];
this.relatedStore.forEach((element, index) => {
debugger;
  if (element.creator == select) {
          this.Barcode = element.barcode;
          this.productBindImage = element.imageurl;
          let flag = 0;
          this.arrayCart.forEach((element2, index) => {
            if (element2.product.code == element.barcode  && element2.product.store == this.statusSelect) {
              flag = 1;

              this.inCart = `${ element2.product.count} items in cart`;
              this.pdtcount = element2.product.count;
            }
          });
          if (flag == 0) {
            this.inCart = '';
            this.pdtcount = 1;
          }
          if (this.pdtcount > element.quant) {
            this.pdtcount = element.quant;
          }
          this.storelimit = element.quant;
        }


    });
const pdctCount = this.pdtcount;
const temp = pdctCount * Number(data);
$('.CartupdatePrice').html(temp);
this.statusCartButton();
  }
  relatedstore() {
    this.relatedStore.forEach((element, index) => {




        });
  }
productView(prdctId,storeid) {
  
  $('#productView').modal('show');
  this.relatedStore = [];
  const relatedStore = () => {
    return new Promise((resolve, reject) => {
      this.productFilterArray.forEach((element, index) => {

        if (element.barcode == prdctId) {
debugger;
            this.relatedStore.push(element);

        }
        if (index == element.barcode.length) {
          resolve(true);
        }
      });

     });
  };
  const checkPdt = () => {
    return new Promise((resolve, reject) => {
      this.productFilterArray.forEach(element => {
        debugger;
        if (element.creator == storeid && element.barcode == prdctId ) {
             // const Barcode="";
      // const price="";
      // const storeid="";
      // const storename="";
            // this.barcode=element.barcode;
            this.statusSelect = element.creator;
            this.Barcode = prdctId;
            this.storename=element.source[0].storename;
            this.finalprice = element.price;
            // this.tempcommon = prdctCommon;
            this.productBindImage = element.imageurl;
            this.productBindName = element.productname;
            this.productBindbrandName = element.brandName;
            this.productBindproductSize = element.productSize;
            this.productBindprice = element.price;
            // this.productBindproductCommon = element.productCommon.store;
            this.storelimit = element.quant;
            // if(this.arrayCart.)
            // {}
            let flag = 0;

            this.arrayCart.forEach((element2, index) => {
              if (element2.product.code == prdctId && element2.product.store == this.statusSelect) {

                flag = 1;
                this.inCart = `${ element2.product.count} items in cart`;
                this.pdtcount = element2.product.count;
              }
            });
            // change later
            // this.inCart = `${count} items in cart`;
            if (flag == 0) {
            this.pdtcount = 1;
            this.inCart = '';
            }


            this.statusCartButton();
            resolve(true);
        }
      });
    });
  };

  checkPdt()
  .then(
    isAvail => {

        if (isAvail) {
          setTimeout(function() {
            $('.pricelist').lightSlider({
              item: 4,
              loop: false,
              slideMove: 2,
              easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
              speed: 600,
              auto: false,
              pauseOnHover: true,
              pager: false,
              controls: true,
              enableTouch: true,
              adaptiveHeight: true,
            });
          }, 200);

        } else {
          alert('Sorry Product Not available');
        }


    }
  );
  relatedStore();



// tslint:disable-next-line: no-unused-expression



}
  ngAfterViewInit() {
// after parent loads get initalzie child for data

  }
}
