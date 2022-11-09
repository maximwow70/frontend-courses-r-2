import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { delay, Subject, takeUntil } from 'rxjs';
import { HotelComponent } from './hotels/components/hotel/hotel.component';
import { Hotel } from './hotels/models/hotel';
import { HotelsService } from './hotels/services/hotels.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public isLoading: boolean = false;

  public ngOnInit(): void {

  }
}
