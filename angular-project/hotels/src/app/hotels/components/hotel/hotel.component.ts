import {
  Component,
  OnInit,
  Input,
  ElementRef,
  TemplateRef,
  HostListener,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  AfterViewInit,
  OnDestroy,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';
import {
  delay,
  filter,
  map,
  Observable,
  of,
  Subject,
  Subscription,
  switchMap,
  take,
  takeUntil,
} from 'rxjs';
import { Hotel } from '../../models/hotel';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  private destroy$: Subject<void> = new Subject<void>();

  @Input()
  public hotel: Hotel;

  @Input()
  public content: TemplateRef<HTMLElement>;

  @Output()
  public hotelChange: EventEmitter<Hotel> = new EventEmitter<Hotel>();

  @Output()
  public hotelRemove: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public hotelEdit: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public hotelClicked: EventEmitter<void> = new EventEmitter<void>();

  private myInterval: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    // if (this.hotel?.id === '1') {
    //   this.myInterval = setInterval(() => console.log('1'), 1000);
    // }
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    if (this.myInterval) {
      clearInterval(this.myInterval);
    }

    this.destroy$.next();
    this.destroy$.complete();
  }

  @HostListener('click')
  public hostClicked(): void {
    this.hotelClicked.emit();
  }

  public onHotelRemove(): void {
    this.hotelRemove.emit();
  }

  public onHotelChange(): void {
    this.hotelChange.emit(this.hotel);
  }

  public onEditHotel(): void {
    this.hotelEdit.emit();
  }
}
