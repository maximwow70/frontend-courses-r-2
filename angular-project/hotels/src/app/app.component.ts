import { Component, ViewEncapsulation } from '@angular/core';
import { Hotel } from './hotels/models/hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public newHotelName: string = '';

  public hotels: Hotel[] = [
    {
      id: '1',
      name: 'Hotel 1',
      isDetailed: false,
    },
    {
      id: '2',
      name: 'Hotel 2',
      isDetailed: true,
    },
    {
      id: '13',
      name: 'Hotel 13',
      isDetailed: true,
    },
    {
      id: '15',
      name: 'Hotel 15',
      isDetailed: false,
    },
  ];

  constructor() {}

  public addNewHotel(): void {
    if (this.newHotelName) {
      this.hotels = [
        ...this.hotels,
        {
          id: String(Math.random()),
          name: this.newHotelName,
          isDetailed: false,
        },
      ];
      this.newHotelName = '';
    }
  }
}
