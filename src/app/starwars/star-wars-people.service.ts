import {Injectable} from '@angular/core';
import {StarWarsPeople} from './star-wars-people';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Http} from '@angular/http';

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
  private api_url = 'http://swapi.co/api/people';

  constructor(private http: Http) {
  }

  getPeoples(): Observable<StarWarsPeople[]> {
    //return this.starWarsPeople;
    //return Observable.of(this.starWarsPeople);
    return this.http.get(this.api_url).map((res) => {
      console.log(res);
      return res.json().results;
    });
  }

}
