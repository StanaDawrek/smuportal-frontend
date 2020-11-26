import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmsMainPageComponent } from './bms-main-page.component';

describe('BmsMainPageComponent', () => {
  let component: BmsMainPageComponent;
  let fixture: ComponentFixture<BmsMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmsMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmsMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
