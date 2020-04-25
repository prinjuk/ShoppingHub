import { Component, OnInit, ViewChild , Input } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-cartfooter',
  templateUrl: './cartfooter.component.html',
  styleUrls: ['./cartfooter.component.css']
})
export class CartfooterComponent implements OnInit {
  @Input() childMessage: any;
  constructor() { }

  ngOnInit(): void {

    // console.log(this.childMessage);

  }
goCART()
{
// { alert(this.childMessage);
  $('#checkoutcart').modal('show');
}}
