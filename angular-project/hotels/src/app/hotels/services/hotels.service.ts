import { Injectable } from '@angular/core';
import { BehaviorSubject, take } from 'rxjs';
import { Hotel } from '../models/hotel';
import { HotelsDataService } from './hotels-data.service';

@Injectable()
export class HotelsService {
  private hotels: Hotel[] = [];
  public hotels$: BehaviorSubject<Hotel[]> = new BehaviorSubject<Hotel[]>(
    this.hotels
  );

  constructor(private hotelsDataService: HotelsDataService) {
    this.hotelsDataService
      .getHotels()
      .pipe(take(1))
      .subscribe((hotels: Hotel[]) => {
        this.hotels = hotels;
        this.hotels$.next(this.hotels);
      });
  }

  public initializeHotels(hotels: Hotel[]): void {
    this.hotels = hotels;
    this.hotels$.next(this.hotels);
  }

  public removeHotel(hotel: Hotel): void {
    this.hotels = this.hotels.filter((h) => h.id !== hotel.id);
    this.hotels$.next(this.hotels);
  }

  public addHotel(hotel: Hotel): void {
    this.hotels = [...this.hotels, hotel];
    this.hotels$.next(this.hotels);
  }
}
