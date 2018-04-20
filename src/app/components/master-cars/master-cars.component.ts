import { Component, OnInit, Input } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { SlicePipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Car } from '../../models/car';
import { CarDataService } from '../../services/car.data.service';
import { ComparisonModalComponent } from './comparison-modal/comparison-modal.component';

@Component({
  selector: 'app-master-cars',
  templateUrl: './master-cars.component.html',
  styleUrls: ['./master-cars.component.css']
})

export class MasterCarsComponent implements OnInit {
  comparationItems:Car[] = [];
  listOfcars:Car[];
  isComparationAvailable:boolean = true;
  viewMode:string = 'grid';
  searchText:string = "";
  
  constructor(
    private carData: CarDataService, 
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.carData.getAll().subscribe((data) => { 
      this.listOfcars = data;
      this.sortListOfCars();
    });
  }

  switchViewMode(mode:string){
    this.viewMode = mode;
  }

  disableButton(item:Car): boolean {
    if(this.comparationItems.length == 3) {
      return this.searchElement(item) > -1 ? false : true;
    }
    return false
  }

  toggleComparison(item:Car) {
    if(this.comparationItems.length < 3 && this.searchElement(item) == -1){
      item.selected = true;
      this.comparationItems.push(item);
      return true;
    }
    this.removeComparationElement(item);
  }

  compareModels(comparateModal) {
    this.modalService.open(comparateModal, { size: 'lg' }).result.then((result) => {
      console.log("LELT " + result);
      this.comparationItems=[];
    }, (reason) => {
      console.log("AHHH" + reason);
      this.comparationItems=[];
    });
    this.removeComparisonFlag();
  }

  private sortListOfCars() {
    this.listOfcars.sort(function(a, b){
      if(a.model < b.model) return -1;
      if(a.model > b.model) return 1;
      return 0;
    })
  }

  private removeComparationElement(item: Car) {
    let index = this.searchElement(item);
    if (index >= 0) {
      this.comparationItems.splice(index, 1);
      item.selected = false;
    }
  }

  private searchElement(item:Car): number {
    for(var i = 0; i < this.comparationItems.length; i++) {
      if(this.comparationItems[i].id === item.id) {
        return i;
      }
    }
    return -1;
  }

  private removeComparisonFlag() {
    for(var i = 0; i < this.listOfcars.length; i++) {
      this.listOfcars[i].selected = false;
    }
  }

}
