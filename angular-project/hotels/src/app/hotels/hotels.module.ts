import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './components/hotel/hotel.component';
import { FormsModule } from '@angular/forms';
import { ColorRedDirective } from './directives/color-red.directive';
import { HotelsService } from './services/hotels.service';
import { HotelNamesComponent } from './components/hotel-names/hotel-names.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelDetailedComponent } from './components/hotel-detailed/hotel-detailed.component';
import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsDataService } from './services/hotels-data.service';

@NgModule({
  declarations: [
    HotelComponent,
    HotelNamesComponent,
    HotelsComponent,
    ColorRedDirective,
    HotelDetailedComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, HotelsRoutingModule],
  providers: [HotelsService, HotelsDataService],
  exports: [HotelsComponent, HotelNamesComponent],
})
export class HotelsModule {}
