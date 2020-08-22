import { Component, OnInit, Input } from '@angular/core';
import { CartDataService } from '../cart-data.service';
import { NgForm } from '@angular/forms';
import { AuthService } from'../auth.service';
@Component({
  selector: 'app-paymentsummary',
  templateUrl: './paymentsummary.component.html',
  styleUrls: ['./paymentsummary.component.css']
})
export class PaymentsummaryComponent implements OnInit {
  childMessage: any;
  Details: any;
  isLoggedIn=false;
  payout = 0;
  constructor(private cartData: CartDataService,private auth:AuthService ) { }
  Recal() {
    let sum = 0;
    this.childMessage.forEach(element => {
    sum += Number(element.product.price * element.product.count);
  });
    this.payout = sum;
  }
  ngOnInit(): void {
   
    this.cartData.currentMessage.subscribe(message => this.childMessage = message);
    if (this.childMessage.length == 0 && JSON.parse(localStorage.getItem('cartStorage')) != null) {
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
  paymentForm(form: NgForm) {
    if(form.invalid)
    return;
    const details = this.Details = {
      firstname: form.value.firstname,
      lastname: form.value.lastname,
      phone: form.value.phone,
      addy: form.value.addy,
      street: form.value.street,
      city: form.value.city,
      zip: form.value.zip,
      state: form.value.state,
    };
console.log(details);
  }
}
