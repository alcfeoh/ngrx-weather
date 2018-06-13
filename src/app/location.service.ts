import { Injectable } from '@angular/core';
import {WeatherService} from "./weather.service";

export const LOCATIONS : string = "locations";

@Injectable()
export class LocationService {

  locations : string[] = [];

  constructor(private weatherService : WeatherService) {

  }

  addLocation(zipcode : string){
    this.locations.push(zipcode);
    this.weatherService.addCurrentConditions(zipcode);
  }

  removeLocation(zipcode : string){
    let index = this.locations.indexOf(zipcode);
    if (index !== -1){
      this.locations.splice(index, 1);
      this.weatherService.removeCurrentConditions(zipcode);
    }
  }

  getLocations() : string[]{
    return this.locations;
  }
}
