import { Selector } from '@ngrx/store';
import { Hotel } from 'src/app/hotels/models/hotel';
import { AppState } from '../app.state';

export const selectHotels: Selector<AppState, Hotel[]> = (state) =>
  state.hotels.all;
