import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hotel } from 'src/app/hotels/models/hotel';
import { AppState } from '../app.state';
import { loadHotels, loadHotelsSuccess } from './hotels.actions';
import { HotelsState } from './hotels.reducer';
import { selectHotels } from './hotels.selectors';

@Injectable()
export class HotelsStoreService {
  public hotels$: Observable<Hotel[]>;

  constructor(private store: Store<HotelsState>) {
    this.hotels$ = this.store.select(selectHotels);
  }

  public loadHotels(): void {
    this.store.dispatch(loadHotels());
  }

  public loadHotelsSuccess(hotels: Hotel[]): void {
    this.store.dispatch(loadHotelsSuccess(hotels));
  }
}
