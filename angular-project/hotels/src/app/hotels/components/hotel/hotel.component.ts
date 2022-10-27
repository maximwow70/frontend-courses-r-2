import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
  @Input()
  public hotel: Hotel;

  constructor() {}

  ngOnInit(): void {}

  public hotelClicked(event: Event): void {
    this.hotel.isDetailed = !this.hotel.isDetailed;
  }

  public onHotelChange(): void {
    console.log(this.hotel.name);
  }
}
