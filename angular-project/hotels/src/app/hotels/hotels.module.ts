import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './components/hotel/hotel.component';
import { FormsModule } from '@angular/forms';
import { ColorRedDirective } from './directives/color-red.directive';

@NgModule({
  declarations: [HotelComponent, ColorRedDirective],
  imports: [CommonModule, FormsModule],
  exports: [HotelComponent],
})
export class HotelsModule {}
