import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { HotelComponent } from './hotels/components/hotel/hotel.component';
import { Hotel } from './hotels/models/hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  @ViewChildren(HotelComponent)
  public hotelComponents: HotelComponent[];

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
      isCustom: true,
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
    undefined,
  ] as any;

  public changeDetectionHotel: Hotel = {
    id: '1as',
    name: 'changeDetectionHotel',
    isDetailed: false,
  };

  constructor() {}

  public addNewHotel(newHotelNameInput: HTMLInputElement): void {
    console.log(newHotelNameInput);
    console.log(this.hotelComponents);
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

  public hotelRemove(hotel: Hotel): void {
    this.hotels = this.hotels.filter((h) => h?.id !== hotel.id);
  }

  public changeDetectionHotelRemove(): void {
    this.changeDetectionHotel = {
      ...this.changeDetectionHotel,
      name: 'new name',
    };
    // this.changeDetectionHotel.name = 'new hotel';
    console.log(this.changeDetectionHotel.name);
  }

  public hotelChange(hotel: Hotel): void {
    console.log('-> from app component');
    console.log(hotel);
  }
}
