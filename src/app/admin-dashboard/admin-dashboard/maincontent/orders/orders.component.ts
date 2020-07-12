import { Component, OnInit } from '@angular/core';
export class Orders {

  public Id: number;
  public store: string;
  public cust: string;
  public orderdate: string;
  public status: string;
  public routerLink: string;
}

const commonOrderData: Orders[] = [
  {Id: 1, store: 'Kunnil Hypermarket', cust: 'Koshy V,Eden Bungalow', orderdate: '22/06/2020', status: 'pending', routerLink: ''},
  {Id: 1, store: 'Kunnil Hypermarket', cust: 'Koshy V,Eden Bungalow', orderdate: '22/06/2020', status: 'pending', routerLink: ''},
  {Id: 1, store: 'Kunnil Hypermarket', cust: 'Koshy V,Eden Bungalow', orderdate: '22/06/2020', status: 'pending', routerLink: ''},
  {Id: 1, store: 'Kunnil Hypermarket', cust: 'Koshy V,Eden Bungalow', orderdate: '22/06/2020', status: 'pending', routerLink: ''},

];

function completed() {

}
function pending() {
  // debugger;
  // alert(this.commonOrderData);
//   this.Orders.forEach((element, index) => {
//   if (element.status == '2' || element.status == 'pending') {
// alert('');
//   }
// });
}
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'store', 'cust', 'orderdate', 'status', 'routerLink'];
  Orders = commonOrderData;
  pendingorders = commonOrderData;
  completedorders = commonOrderData;
  constructor() { }

  ngOnInit(): void {

  }

}
