import { Component, OnInit, ViewChild } from '@angular/core';
// import { DatatableServiceStore } from '../../../../sharedView/shared-components/datatable.service';
// import { StoreList } from '../../../../sharedView/shared-components/datatable.model';
export class StoreList {
  public name: string;
  public Id: number;
  public owner: string;
  public sales: number;
}

const ELEMENT_DATA: StoreList[] = [
  {Id: 1, name: 'Kunnil Hypermarket', owner: 'Koshy V,Eden Bungalow', sales: 234},
  {Id: 2, name: 'Amazon Stores', owner: 'thomas V,love dale', sales: 4},
  {Id: 3, name: 'KFC', owner: 'pkV,Eden love', sales: 34},
  {Id: 4, name: 'Supreme', owner: 'varun,Eden love', sales: 24},

];
@Component({
  selector: 'app-manageshops',
  templateUrl: './manageshops.component.html',
  styleUrls: ['./manageshops.component.css']
})
export class ManageshopsComponent implements OnInit {
  displayedColumns: string[] = ['Id', 'name', 'owner', 'sales'];
  dataStore = ELEMENT_DATA;
  // message: string;

  // public dataStore2: StoreList[] = [
  //   {Id: 1, name: 'roint', owner: 'Koshy V,Eden Bungalow', sales: 234},
  //   {Id: 2, name: 'Amazon Stores', owner: 'thomas V,love dale', sales: 4},
  //   {Id: 3, name: 'KFC', owner: 'pkV,Eden love', sales: 34},
  //   {Id: 4, name: 'Supreme', owner: 'varun,Eden love', sales: 24},

  // ];

  constructor(
    // public datatableServiceStore: DatatableServiceStore,
    // private data: DatatableServiceStore,
    // public StoreList: DatatableServiceStore
    ) { }

  ngOnInit(): void {
    // this.newMessage();
  }
  // newMessage() {
  //   this.data.changeMessage(this.dataStore);
  //   this.data.changeMessage(this.dataStore2);
  // }
}
