import { Action } from '@ngrx/store';


export interface State {
    zipcodes: Array<string>
}

export const initialState: State = {
    zipcodes: []
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
