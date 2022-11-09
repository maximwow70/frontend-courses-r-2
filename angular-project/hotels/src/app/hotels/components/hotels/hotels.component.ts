import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChildren,
} from '@angular/core';
import { delay, Subject, take, takeUntil } from 'rxjs';
import { Hotel } from '../../models/hotel';
import { HotelsService } from '../../services/hotels.service';
import { HotelComponent } from '../hotel/hotel.component';

import { cloneDeep } from 'lodash';
import { HotelsDataService } from '../../services/hotels-data.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  @ViewChildren(HotelComponent)
  public hotelComponents: HotelComponent[];

  public newHotelName: string = '';

  public hotels: Hotel[] = [];

  public isLoading: boolean = true;

  constructor(
    private hotelsService: HotelsService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.hotelsService.hotels$
      .pipe(takeUntil(this.destroy$))
      .subscribe((hotels: Hotel[]) => {
        this.hotels = cloneDeep(hotels);
        this.changeDetectorRef.markForCheck();
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public addHotel(): void {
    this.hotelsService.addHotel({
      id: String(Math.random()),
      name: this.newHotelName,
      isDetailed: false,
    });
  }

  public hotelRemove(hotel: Hotel): void {
    this.hotelsService.removeHotel(hotel);
  }

  public hotelChange(hotel: Hotel): void {}
}
