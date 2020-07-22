import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-statusinvent',
  templateUrl: './statusinvent.component.html',
  styleUrls: ['./statusinvent.component.css']
})
export class StatusinventComponent implements OnInit {
  searchData:any='Products from ShopHub';
  productTransfer=[];
  totalPosts=1;
  postPerPage=2;
  pageSizeOptions=[1,2,3,10];
  constructor(public http:HttpClient) { }
  onChangedPage(pageData:PageEvent)
  {
    debugger;
    this.searchData=`?size=${pageData.pageSize}&page=${pageData.pageIndex+1}`;
    this.getList();
  }
  ngOnInit(): void {
    this.searchData=`?size=${this.postPerPage}&page=${this.totalPosts}`;
    this.getList();
  }
getList()
{
  this.http.get<{message: string, list: any}>('http://localhost:3000/api/retLimiter/'+this.searchData)
  .subscribe((res) => {

    this.productTransfer = [...res.list];

  
    

  

  });
}
}
