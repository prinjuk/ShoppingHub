import { Component, OnInit, ViewChild , Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartDataService } from '../cart-data.service';
declare var $: any;
@Component({
  selector: 'app-cartfooter',
  templateUrl: './cartfooter.component.html',
  styleUrls: ['./cartfooter.component.css']
})

export class CartfooterComponent implements OnInit {
  @Input() childMessage: any;
  payout=0;
  @ViewChild('closebutton') closebutton;
  constructor(private router: Router,private cartData: CartDataService) { }

  ngOnInit(): void {
   this.cartData.currentMessage.subscribe(message => this.childMessage = message);
    // console.log(this.childMessage);

  }
  goPayment()
  {
    this.closebutton.nativeElement.click();
    this.cartData.changeMessage(this.childMessage);
    this.router.navigate(['paymentsummary']);
  }
goCART()
{
  var sum=0;
  this.childMessage.forEach(element => {
    sum+=Number(element.product.price*element.product.count);
  });
  this.payout =sum;
  //localstorage
  localStorage.setItem('cartStorage', this.childMessage);
// { alert(this.childMessage);
  $('#checkoutcart').modal('show');
}}
