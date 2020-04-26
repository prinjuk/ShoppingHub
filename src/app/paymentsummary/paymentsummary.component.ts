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

  ngOnInit(): void {
    this.cartData.currentMessage.subscribe(message => this.childMessage = message);
    var sum=0;
    // this.childMessage = localStorage.getItem('cartStorage');
    this.childMessage.forEach(element => {
      sum+=Number(element.product.price* element.product.count);
    });
    this.payout=sum;

  }
  paymentForm()
  {

  }
}
