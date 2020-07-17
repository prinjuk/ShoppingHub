import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SyncDataEditorService {


  private updatedData = new BehaviorSubject([]);
  currentMessage = this.updatedData.asObservable();
  constructor() { }

  changeMessage(message: any) {
    this.updatedData.next(message);
  }

}
