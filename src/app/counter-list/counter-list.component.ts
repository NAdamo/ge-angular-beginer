import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {
  counterArray: number[];
  currentCounter: number;

  constructor() {
  }

  ngOnInit() {
    this.counterArray = [1, 2, 4];
  }

  onCounterChange(n: number) {
    this.currentCounter = n;
  }
}
