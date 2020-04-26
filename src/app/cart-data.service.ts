import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  private cartData = new BehaviorSubject([]);
  currentMessage = this.cartData.asObservable();
  constructor() { }

  changeMessage(message: any) {
    this.cartData.next(message);
  }
}
