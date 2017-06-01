import {Component, OnInit, Input, EventEmitter, Output, OnChanges} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges {
  @Input()
  counter: number;

  @Input()
  color: string;

  @Input()
  counterIndex: number;

  @Output()
  counterClick = new EventEmitter<number>()

  constructor() {
    this.counter = 0;
    this.color = 'black';
    this.counterIndex = -1;
  }

  ngOnInit() {
    //this.counter = 10;
  }

  ngOnChanges() {
    console.log('OnChanges', this.counterIndex);
    this.counter *= 3;
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
