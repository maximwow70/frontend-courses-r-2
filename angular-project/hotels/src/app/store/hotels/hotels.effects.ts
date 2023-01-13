import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Hotel } from 'src/app/hotels/models/hotel';
import { HotelsDataService } from 'src/app/hotels/services/hotels-data.service';
import { loadHotels, loadHotelsSuccess } from './hotels.actions';

@Injectable()
export class HotelsEffects {
  loadHotels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHotels.type),
      switchMap(() => {
        return this.hotelsDataService.getHotels().pipe(
          map((hotels: Hotel[]) => {
            return loadHotelsSuccess(hotels);
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private hotelsDataService: HotelsDataService
  ) {}
}
