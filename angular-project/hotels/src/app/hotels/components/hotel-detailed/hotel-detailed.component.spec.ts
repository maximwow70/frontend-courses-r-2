import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelDetailedComponent } from './hotel-detailed.component';

describe('HotelDetailedComponent', () => {
  let component: HotelDetailedComponent;
  let fixture: ComponentFixture<HotelDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelDetailedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
