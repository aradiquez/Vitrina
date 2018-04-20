import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Car } from '../models/car';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CarDataService {

  constructor(private http: Http) {}

  getAll(): Observable<Car[]> {
      return this.http.get("assets/mock-cars.json")
        .map((data) => data.json());
  }

  getItem(id: number): Observable<Car> {
    return this.getAll().map((data) => data.find( car => car.id === id ));
  }
}
