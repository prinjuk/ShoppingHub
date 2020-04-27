import { Component, OnInit, Input } from '@angular/core';
import { CartDataService } from '../cart-data.service';
@Component({
  selector: 'app-paymentsummary',
  templateUrl: './paymentsummary.component.html',
  styleUrls: ['./paymentsummary.component.css']
})
export class PaymentsummaryComponent implements OnInit {
  childMessage : any;
  payout =0;
  constructor(private cartData : CartDataService) { }
  Recal() {
    let sum = 0;
    this.childMessage.forEach(element => {
    sum += Number(element.product.price * element.product.count);
  });
    this.payout = sum;
  }
  ngOnInit(): void {
    this.cartData.currentMessage.subscribe(message => this.childMessage = message);
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
  paymentForm()
  {

  }
}
