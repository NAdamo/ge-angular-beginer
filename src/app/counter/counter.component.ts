import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input()
  counter: number;

  @Output()
  counterClick = new EventEmitter<number>()

  constructor() {
    this.counter = 0;
  }

  ngOnInit() {
    //this.counter = 10;
  }

  decrease() {
    this.counter--;
    this.counterClick.emit(this.counter);
  }

  increase() {
    this.counter++;
    this.counterClick.emit(this.counter);
  }

}
