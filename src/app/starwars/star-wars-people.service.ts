import {Injectable} from '@angular/core';
import {StarWarsPeople} from './star-wars-people';

@Injectable()
export class StarWarsPeopleService {
  private starWarsPeople: StarWarsPeople[] = [
    {
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      hair_color: 'blond',
      skin_color: 'fair',
      gender: 'male'
    },
    {
      name: 'Leila Skywalker',
      height: 172,
      mass: 77,
      hair_color: 'blond',
      skin_color: 'fair',
      gender: 'male'
    }
  ];

  constructor() {
  }

  getPeoples() {
    return this.starWarsPeople;
  }

}
