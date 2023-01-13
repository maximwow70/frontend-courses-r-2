import { Component, OnDestroy, OnInit } from '@angular/core';
import { HotelsStoreService } from 'src/app/store/hotels/hotels-store.service';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-hotel-names',
  templateUrl: './hotel-names.component.html',
  styleUrls: ['./hotel-names.component.scss'],
})
export class HotelNamesComponent implements OnInit, OnDestroy {
  constructor(public hotelsStoreService: HotelsStoreService) {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {}
}
