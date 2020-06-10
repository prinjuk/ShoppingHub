import { Component, OnInit } from '@angular/core';
export class StoreList {
  public name: string;
  public Id: number;
  public desc: string;
public routerLink:string;
  public lastlogin: string;
  public JoinedOn: string;
}

const ELEMENT_DATA: StoreList[] = [
  {Id: 1, name: 'Prinju Koshy', desc: 'ShopKeeper', lastlogin:'22/08/2021',JoinedOn:'22/08/2000',routerLink:''},
  {Id: 1, name: 'Prinju Koshy', desc: 'ShopKeeper', lastlogin:'22/08/2021',JoinedOn:'22/08/2000',routerLink:''},
  {Id: 1, name: 'Prinju Koshy', desc: 'ShopKeeper', lastlogin:'22/08/2021',JoinedOn:'22/08/2000',routerLink:''},
  {Id: 1, name: 'Prinju Koshy', desc: 'ShopKeeper', lastlogin:'22/08/2021',JoinedOn:'22/08/2000',routerLink:''},

];

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.css']
})
export class ManageusersComponent implements OnInit {


  displayedColumns: string[] = ['Id', 'name', 'desc', 'lastlogin','JoinedOn','routerLink'];
  dataUser = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
