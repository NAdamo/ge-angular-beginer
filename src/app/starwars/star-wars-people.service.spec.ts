import { TestBed, inject } from '@angular/core/testing';

import { StarWarsPeopleService } from './star-wars-people.service';

describe('StarWarsPeopleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StarWarsPeopleService]
    });
  });

  it('should ...', inject([StarWarsPeopleService], (service: StarWarsPeopleService) => {
    expect(service).toBeTruthy();
  }));
});
