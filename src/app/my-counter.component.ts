import { increment, decrement, reset } from './counter.actions';
import { Component } from '@angular/core'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html'
})

export class MyCounterComponent{
  count$!: Observable<number>

  constructor(private store: Store<{count: number}>){
    //connect this.count$ stream to current store 'count' state
    this.count$ = store.select('count')
  }

  increment(){
    //dispatch increment action
    this.store.dispatch(increment())
  }

  decrement(){
    //dispatch decrement action
    this.store.dispatch(decrement())
  }

  reset(){
    //dispatch reset action
    this.store.dispatch(reset())
  }


}
