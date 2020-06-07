import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { DatatableServiceStore } from '../shared-components/datatable.service';

export interface PeriodicElement {

}

const ELEMENT_DATA= [];
// let listk: any;

// let dataSource : any;
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})

export class DatatableComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'name', 'owner', 'sales','view'];
  dataSource = ELEMENT_DATA;
  constructor(public datatableServiceStore: DatatableServiceStore) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    this.dataSource = this.datatableServiceStore.dataStore;

  }

}
