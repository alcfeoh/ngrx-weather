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
import {routerReducer, RouterReducerState} from '@ngrx/router-store';

export interface State {
  zipcodes: ZipcodeState,
  currentConditions: CurrentConditionsState
  router: RouterReducerState
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipcodeReducer,
  currentConditions: currentConditionsReducer,
  router: routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectZipcodeState = (state: State) => state.zipcodes;

export const selectZipcodeList = createSelector(selectZipcodeState, (state: ZipcodeState) => state.zipcodes);

export const selectCurrentConditionsState = (state: State) => state.currentConditions;

export const selectCurrentConditionsList = createSelector(selectCurrentConditionsState, (state: CurrentConditionsState) => state.currentConditions);
