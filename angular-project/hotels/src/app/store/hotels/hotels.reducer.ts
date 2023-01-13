import { createReducer, on } from '@ngrx/store';
import { Hotel } from 'src/app/hotels/models/hotel';
import { loadHotels, loadHotelsSuccess } from './hotels.actions';

export interface HotelsState {
  all: Hotel[];
  isLoading: boolean;
  isFailed: boolean;
}

export const initialState: HotelsState = {
  all: [],
  isLoading: false,
  isFailed: false,
};

export const hotelsReducer = createReducer(
  initialState,
  on(loadHotels, (state: HotelsState) => {
    return {
      ...state,
      isLoading: true,
    };
  }),
  on(loadHotelsSuccess, (state: HotelsState, payload: { hotels: Hotel[] }): HotelsState => {
    return {
      ...state,
      all: payload.hotels,
      isLoading: false,
      isFailed: false,
    };
  })
);
