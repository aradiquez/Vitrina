import { Pipe, PipeTransform } from '@angular/core';

import { Car } from './../models/car';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: Car[], searchText: string): Car[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      return it.model.toLowerCase().includes(searchText);
    });
   }
}