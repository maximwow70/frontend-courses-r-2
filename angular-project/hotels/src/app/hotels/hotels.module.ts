import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './components/hotel/hotel.component';
import { FormsModule } from '@angular/forms';
import { ColorRedDirective } from './directives/color-red.directive';
import { HotelsService } from './services/hotels.service';
import { HotelNamesComponent } from './components/hotel-names/hotel-names.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HotelComponent,
    HotelNamesComponent,
    HotelsComponent,
    ColorRedDirective,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [HotelsService],
  exports: [HotelsComponent, HotelNamesComponent],
})
export class HotelsModule {}
