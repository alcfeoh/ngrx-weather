import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../reducers';
import {WeatherService} from '../weather.service';
import {RemoveZipcode} from '../actions/zipcode.actions';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

    zipcodes: Array<String>;

    currentConditions: Map<string, any>;

    constructor(private store: Store<State>, public weatherService: WeatherService) {
        store.select(state => state.zipcodes)
            .subscribe(zips => this.zipcodes = zips.zipcodes);

        store.select(state => state.currentConditions)
            .subscribe(conditions => this.currentConditions = conditions.currentConditions);
    }

    getConditions(zip: string) {
        return this.currentConditions.get(zip);
    }

    removeZip(zip: string) {
        this.store.dispatch(new RemoveZipcode(zip));
    }

}
