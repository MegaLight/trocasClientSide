
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import 'rxjs/add/operator/filter';

@Injectable({
  providedIn: 'root'
})
export class CardSelectionService {

  private state = new BehaviorSubject<number>(null);

  public setValue(value: number) {
    this.state.next(value);
    console.log("cardSelectionService "+value)
  }

  public getValue(): Observable<number> {
    return this.state.asObservable().filter(Boolean);
  }


}
