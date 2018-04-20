import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { CarDataService } from './../../services/car.data.service';
import { Car } from './../../models/car';

@Component({
  selector: 'app-detail-cars',
  templateUrl: './detail-cars.component.html',
  styleUrls: ['./detail-cars.component.css']
})
export class DetailCarsComponent implements OnInit {
  item: Car;

  constructor(
    private route: ActivatedRoute,
    private service: CarDataService
  ) {}

  ngOnInit() {
    this.service.getItem(+this.route.snapshot.paramMap.get('id')).subscribe((item) => this.item = item)
  }

}
