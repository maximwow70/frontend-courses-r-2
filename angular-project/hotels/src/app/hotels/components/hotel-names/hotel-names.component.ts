import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { cloneDeep } from 'lodash';
import { delay, Subject, takeUntil } from 'rxjs';
import { Hotel } from '../../models/hotel';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-hotel-names',
  templateUrl: './hotel-names.component.html',
  styleUrls: ['./hotel-names.component.scss'],
})
export class HotelNamesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();

  public hotels: Hotel[] = [];

  constructor(
    private hotelsService: HotelsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.hotelsService.hotels$
      .pipe(takeUntil(this.destroy$))
      .subscribe((hotels: Hotel[]) => {
        this.hotels = cloneDeep(hotels);
        this.changeDetectorRef.markForCheck();
      });
  }

  public ngOnDestroy(): void {}
}
