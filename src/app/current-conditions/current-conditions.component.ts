import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../reducers';

@Component({
  selector: 'app-current-conditions',
  templateUrl: './current-conditions.component.html',
  styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

    zipcodes: Array<String>;

    constructor(private store: Store<State>) {
        store.select(state => state.zipcodes)
            .subscribe(zips => this.zipcodes = zips.zipcodes);
    }
}
