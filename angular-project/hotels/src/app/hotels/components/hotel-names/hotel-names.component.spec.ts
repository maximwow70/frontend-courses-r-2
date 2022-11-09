import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelNamesComponent } from './hotel-names.component';

describe('HotelNamesComponent', () => {
  let component: HotelNamesComponent;
  let fixture: ComponentFixture<HotelNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
