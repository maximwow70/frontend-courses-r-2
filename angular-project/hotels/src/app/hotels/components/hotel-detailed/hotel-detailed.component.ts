import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'app-hotel-detailed',
  templateUrl: './hotel-detailed.component.html',
  styleUrls: ['./hotel-detailed.component.scss']
})
export class HotelDetailedComponent implements OnInit {

  @Input()
  public hotel: Hotel;

  constructor() { }

  ngOnInit(): void {
  }

}
