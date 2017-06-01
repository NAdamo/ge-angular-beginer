import {Component, OnInit} from '@angular/core';


interface Counter {
  value: number,
  color: string
}

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  counterArray: Counter[];
  currentCounter: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.counterArray = [
      { value: 1, color: 'red'},
      { value: 4, color: 'green'},
      { value: 100, color: 'blue'},
    ];
  }

  onCounterChange(n: number) {
    this.currentCounter = n;
  }
}
