import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { DatatableServiceStore } from '../shared-components/datatable.service';
import { JsonPipe } from '@angular/common';

export interface PeriodicElement {

}

const ELEMENT_DATA = [];
// let listk: any;


// let dataSource : any;
@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})

export class DatatableComponent implements OnInit {
  // ArrayofDynamicData: any;
  // displayedColumns: string[] = [];
  // ELEMENT_DATA = [];
  // dataSource = ELEMENT_DATA;

  // message:any;
  constructor(public datatableServiceStore: DatatableServiceStore,public data: DatatableServiceStore) { }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void {
    // this.data.currentMessage.subscribe(message => this.message = message);

    // this.dataSource = this.message;
    // this.displayedColumns = Object.keys(this.dataSource[0]);


  }

}
