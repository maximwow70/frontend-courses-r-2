import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './components/hotel/hotel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HotelComponent],
  imports: [CommonModule, FormsModule],
  exports: [HotelComponent],
})
export class HotelsModule {}
