import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChildren,
} from '@angular/core';
import { combineLatest, delay, Subject, take, takeUntil } from 'rxjs';
import { Hotel } from '../../models/hotel';
import { HotelsService } from '../../services/hotels.service';
import { HotelComponent } from '../hotel/hotel.component';

import { cloneDeep } from 'lodash';
import { HotelsDataService } from '../../services/hotels-data.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

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
  public selectedHotel: Hotel;

  public isLoading: boolean = true;

  constructor(
    private hotelsService: HotelsService,
    private changeDetectorRef: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public ngOnInit(): void {
    combineLatest([this.hotelsService.hotels$, this.activatedRoute.params])
      .pipe(takeUntil(this.destroy$))
      .subscribe(([hotels, params]: [Hotel[], Params]) => {
        this.hotels = cloneDeep(hotels);
        this.changeDetectorRef.markForCheck();

        const selectedHotel: Hotel | undefined = this.hotels.find(
          (hotel) => hotel.id === params['id']
        );

        if (selectedHotel) {
          this.selectedHotel = selectedHotel;
        } else if (this.hotels && this.hotels.length > 0) {
          this.hotelEdit(this.hotels[0]);
        }
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

  public isHotelSelected(hotel: Hotel): boolean {
    return this.selectedHotel?.id === hotel.id;
  }

  public hotelRemove(hotel: Hotel): void {
    this.hotelsService.removeHotel(hotel);
  }

  public hotelEdit(hotel: Hotel): void {
    this.router.navigate(['/hotels', hotel.id]);
  }

  public hotelChange(hotel: Hotel): void {}
}
