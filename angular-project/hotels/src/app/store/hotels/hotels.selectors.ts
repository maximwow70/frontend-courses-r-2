import { Selector } from '@ngrx/store';
import { Hotel } from 'src/app/hotels/models/hotel';
import { HotelsState } from './hotels.reducer';

export const selectHotels: Selector<HotelsState, Hotel[]> = (
  state: HotelsState
): Hotel[] => state.all;
