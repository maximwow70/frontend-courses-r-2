import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Hotel } from 'src/app/hotels/models/hotel';
import { HotelsDataService } from 'src/app/hotels/services/hotels-data.service';
import { loadHotels, loadHotelsSuccess } from './hotels.actions';

@Injectable()
export class HotelsEffects {
  loadHotels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadHotels.type),
      switchMap(() =>
        this.hotelsDataService.getHotels().pipe(
          map((hotels: Hotel[]) => loadHotelsSuccess(hotels)),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private hotelsDataService: HotelsDataService
  ) {}
}
