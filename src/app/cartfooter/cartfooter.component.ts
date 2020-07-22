import { Component, OnInit, ViewChild , Input , AfterViewInit} from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from '../cart-data.service';
declare var $: any;
@Component({
  selector: 'app-cartfooter',
  templateUrl: './cartfooter.component.html',
  styleUrls: ['./cartfooter.component.css']
})

export class CartfooterComponent implements OnInit, AfterViewInit  {
  @Input() childMessage: any;
  payout = 0;
  @ViewChild('closebutton') closebutton;
  constructor(private router: Router, private cartData: CartDataService) { }

  ngOnInit(): void {
   this.cartData.currentMessage.subscribe(message => this.childMessage = message);
   this.LoadingData();

  }
   Recal() {
      let sum = 0;
      this.childMessage.forEach(element => {
      sum += Number(element.product.price * element.product.count);
    });
      this.payout = sum;
    }
  goPayment() {
    this.closebutton.nativeElement.click();
    this.cartData.changeMessage(this.childMessage);
    this.router.navigate(['paymentsummary']);
  }
goCART() {

  if (this.childMessage.length == 0 && JSON.parse(localStorage.getItem('cartStorage'))!=null) {
  const cartLeftOver = JSON.parse(localStorage.getItem('cartStorage'));
  // alert(cartLeftOver);
  cartLeftOver.forEach(element => {
    this.childMessage.push(element);
  });

} else {
  localStorage.setItem('cartStorage', JSON.stringify(this.childMessage));
}
  this.Recal();

  $('#checkoutcart').modal('show');
}

deleteCart(code, store) {

  this.childMessage.forEach((element, index) => {
    debugger;
    const indexiD = this.childMessage.indexOf(element);
    if (element.product.code == store  && element.product.store == code ) {
      if (this.childMessage.length != 1) {
      this.childMessage.splice(indexiD, index);
      } else {
      this.childMessage = [];
      }
    }
    // sum += Number(element.product.price * element.product.count);
  });
  this.cartData.changeMessage(this.childMessage);
  localStorage.setItem('cartStorage', JSON.stringify(this.childMessage));
  this.Recal();
}
LoadingData()
{
    // after parent loads get initalzie child for data
    if (this.childMessage.length == 0) {
      const cartLeftOver = JSON.parse(localStorage.getItem('cartStorage'));
      // alert(cartLeftOver);
      cartLeftOver.forEach(element => {
        this.childMessage.push(element);
      });
  
    } else {
      localStorage.setItem('cartStorage', JSON.stringify(this.childMessage));
    }
    this.Recal();
  
}
ngAfterViewInit() {
this.LoadingData();
    }

}
