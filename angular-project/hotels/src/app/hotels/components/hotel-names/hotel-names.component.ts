import { Component, OnDestroy, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-hotel-names',
  templateUrl: './hotel-names.component.html',
  styleUrls: ['./hotel-names.component.scss'],
})
export class HotelNamesComponent implements OnInit, OnDestroy {
  constructor(public hotelsService: HotelsService) {}

  public ngOnInit(): void {}

  public ngOnDestroy(): void {}
}
