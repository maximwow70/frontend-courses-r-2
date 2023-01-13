import { createAction } from '@ngrx/store';
import { Hotel } from 'src/app/hotels/models/hotel';

export const loadHotels = createAction('[Hotels] Load Hotels');
export const loadHotelsSuccess = createAction(
  '[Hotels] Load Hotels Success',
  (payload): { hotels: Hotel[] } => {
    return { hotels: payload };
  }
);
