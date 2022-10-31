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
} from '@angular/core';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HotelComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  @Input()
  public hotel: Hotel;

  @Input()
  public content: TemplateRef<HTMLElement>;

  @Output()
  public hotelChange: EventEmitter<Hotel> = new EventEmitter<Hotel>();

  @Output()
  public hotelRemove: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public hotelClicked: EventEmitter<void> = new EventEmitter<void>();

  private myInterval: any;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    if (this.hotel?.id === '1') {
      this.myInterval = setInterval(() => console.log('1'), 1000);
    }
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
    if (this.myInterval) {
      clearInterval(this.myInterval);
    }
    console.log(`component destroyed ${this.hotel.id}`);
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
}
