import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'shop';
  constructor(private auth:AuthService)
  {

  }
  onChange($event){
    console.log($event);
  }
  ngOnInit()
  {
    this.auth.autoAuthUser();
  }
}
