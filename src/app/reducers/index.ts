import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {zipcodeReducer, ZipcodeState} from './zip-codes.reducer';
import {currentConditionsReducer, CurrentConditionsState} from './current-conditions.reducer';

export interface State {
  zipcodes: ZipcodeState,
  currentConditions: CurrentConditionsState
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipcodeReducer,
  currentConditions: currentConditionsReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
