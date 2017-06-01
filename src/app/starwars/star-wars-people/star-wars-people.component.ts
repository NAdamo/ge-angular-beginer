import {Component, OnInit} from '@angular/core';
import {StarWarsPeopleService} from '../star-wars-people.service';
import {StarWarsPeople} from '../star-wars-people';

@Component({
  selector: 'app-star-wars-people',
  templateUrl: './star-wars-people.component.html',
  styleUrls: ['./star-wars-people.component.css'],
  providers: [StarWarsPeopleService]
})
export class StarWarsPeopleComponent implements OnInit {
  peoples: StarWarsPeople[];

  constructor(private service: StarWarsPeopleService) {
    this.peoples = [];
    service.getPeoples().subscribe(res => this.peoples = res);
  }

  ngOnInit() {
  }

}
