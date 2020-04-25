import { Component, OnInit, ViewChild, Renderer2, Input , AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import { CartfooterComponent } from '../cartfooter/cartfooter.component';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { rejects } from 'assert';
import { async } from '@angular/core/testing';
declare var $: any;

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
})

export class ListPageComponent implements OnInit, AfterViewInit  {
  constructor(private router: Router, private rendering: Renderer2, toasterService: ToasterService) {
    this.toasterService = toasterService;
  }
  productTransfer = {};
  productArray = [];
  arrayCart = [];
  productFilterArray = [];
  relatedStore = [];
  storelimit = 1;
  // this.relatedStore ='';
  productidTrans = '';
  tempPdt = '';
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

// DataListPage

 this.productTransfer = [
{   storeId: 'Kunnil',
    storeName: 'Kunnil Hypermarket',
    productid: '411416A001008',
    productName: 'Bingo Mad Angles',
    brandName: 'Bingo',
    productSize: '80g',
    price: '90',
    qtyLeft: '5',
    imageUrl: 'https://homedelivery.ramachandran.in/image/cache/catalog/Diary/391912A001016_Nestle-Everyday-Dw-1Kg-250x250.jpg',
    productCommon: {
      store: 'S105',
    },
},
{
  storeId: 'LULU',
  storeName: 'LULU Hypermarket',
  productid: '1000s',
  productName: 'Lays Potato Chips',
  brandName: 'Lays',
  productSize: '80g',
  price: '100',
  qtyLeft: '15',
  imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71RzeDJqcUL._SX425_.jpg',
  productCommon: {
    store: 'S106',
  },
},
{
  storeId: 'Kunnil',
  storeName: 'Kunnil Hypermarket',
  productid: '1130s',
  productName: 'Lays Potato Chips',
  brandName: 'Lays',
  productSize: '80g',
  price: '400',
  qtyLeft: '4',
  imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/71RzeDJqcUL._SX425_.jpg',
  productCommon: {
    store: 'S106',
  },
}

];
 const data = this.productTransfer;
 for (const key in data) {
  if (data.hasOwnProperty(key)) {

    this.productFilterArray.push(data[key]);

  }
}
//  this.productArray = this.productFilterArray.filter((el, p, i) => {
//   // return i[0].productCommon.store.indexOf(el.productCommon.store) === p
// i.forEach((value, index, array) => {
//   debugger;
//   console.log(i[index].productCommon.store.indexOf(el.productCommon.store) === p);

// });
// });
// Filtering duplication: future filter on low price
 this.productFilterArray.forEach((element, indexz) => {
  let flag = 0;
  if (this.productArray.length == -1) {
      this.productArray.push(element);
    } else {
      this.productArray.forEach((value, index, element) => {

        if (element[index].productCommon.store == this.productFilterArray[indexz].productCommon.store) {
            flag = 1;

          }
      });
      if (flag != 1) {
        this.productArray.push(element);
      }
    }

  });

 $('.btn-cart').click(() => {

      const code = this.tempPdt;
      const store = this.statusSelect;
      const count = this.pdtcount;
      const price = this.finalprice;
      const title = this.productBindName;
      const objectTransfer = {
        product: {
          title,
          code,
          store,
          price,
          count,
        },
      };

      console.log(objectTransfer);
      const priceToast = `₹ ${objectTransfer.product.price}`;
      const labelToast = `Successfully added ${count} x ${objectTransfer.product.title} of ${count * price}`;
      this.toasterService.pop('success', labelToast, priceToast);
      this.arrayCart.push(objectTransfer);
      // this.parentMessage=labelToast;
      this.goProduct();
      this.cartUpdate();
    });


  }
  cartUpdate()  {
    this.parentMessage = this.arrayCart;
      // this.arrayCart.forEach((element,index,Array) => {

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
    debugger;
    const pdctCount = this.pdtcount;
    if (pdctCount != this.storelimit) {
      this.pdtcount++;
    }
    this.statusCartButton();
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
  btnStoreChange(select, data) {

this.finalprice = data;
this.statusSelect = select;
    // this.relatedStore=[];
this.relatedStore.forEach((element, index) => {
      if (element.storeId == select) {
          this.tempPdt = element.productid;
          this.productBindImage = element.imageUrl;

          if (this.pdtcount > element.qtyLeft) {
            this.pdtcount = element.qtyLeft;
          }
          this.storelimit = element.qtyLeft;
        }


    });
const pdctCount = this.pdtcount;
const temp = pdctCount * Number(data);
$('.CartupdatePrice').html(temp);
this.statusCartButton();
  }
productView(prdctId, prdctCommon) {
  $('#productView').modal('show');
  this.relatedStore = [];
  const relatedStore = () => {
    return new Promise((resolve, reject) => {
      this.productFilterArray.forEach((element, index) => {

        if (element.productCommon.store == prdctCommon) {

            this.relatedStore.push(element);

        }
        if (index == element.productCommon.length) {
          resolve(true);
        }
      });

     });
  };
  const checkPdt = () => {
    return new Promise((resolve, reject) => {
      this.productFilterArray.forEach(element => {

        if (element.productid == prdctId && element.productCommon.store == prdctCommon) {
            this.statusSelect = element.storeId;
            this.tempPdt = prdctId;
            this.finalprice = element.price;
            this.tempcommon = prdctCommon;
            this.productBindImage = element.imageUrl;
            this.productBindName = element.productName;
            this.productBindbrandName = element.brandName;
            this.productBindproductSize = element.productSize;
            this.productBindprice = element.price;
            this.productBindproductCommon = element.productCommon.store;
            this.storelimit = element.qtyLeft;
            // change later
            this.pdtcount = 1;


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
