import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmsReserveBookComponent } from './bms-reserve-book.component';

describe('BmsReserveBookComponent', () => {
  let component: BmsReserveBookComponent;
  let fixture: ComponentFixture<BmsReserveBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmsReserveBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmsReserveBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
