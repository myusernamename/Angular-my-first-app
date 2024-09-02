import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor() { }

  private properties: any= [
    { id: 1, name: 'Oceanview Condo', price: 500000, location: 'Miami, FL', size: 1200 },
    { id: 2, name: 'Mountain Cabin', price: 350000, location: 'Aspen, CO', size: 800 },
    { id: 3, name: 'Urban Apartment', price: 750000, location: 'New York, NY', size: 950 },
    { id: 4, name: 'Suburban House', price: 600000, location: 'Los Angeles, CA', size: 2000 },
    { id: 5, name: 'Country Cottage', price: 250000, location: 'Nashville, TN', size: 1500 },
  ];


  getProperties(){
    return this.properties;
  }

}
