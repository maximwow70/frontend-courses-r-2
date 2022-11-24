import { createReducer, on } from '@ngrx/store';
import { Hotel } from 'src/app/hotels/models/hotel';
import { loadHotelsSuccess } from './hotels.actions';

export interface HotelsState {
  all: Hotel[];
}

export const initialState: HotelsState = {
  all: [],
};

export const hotelReducer = createReducer(
  initialState,
  on(loadHotelsSuccess, (state: HotelsState, action): HotelsState => {
    return {
      ...state,
      all: action.payload,
    };
  })
);
