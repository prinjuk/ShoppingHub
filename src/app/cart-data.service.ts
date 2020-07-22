import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartDataService {
  private search = new BehaviorSubject([]);
  currentsearch = this.search.asObservable();
  private cartData = new BehaviorSubject([]);
  currentMessage = this.cartData.asObservable();
  changesearch(message: any) {
    this.search.next(message);
  }
  changeMessage(message: any) {
    this.cartData.next(message);
  }
}
