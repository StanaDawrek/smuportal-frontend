import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsManagementComponent } from './seats-management.component';

describe('SeatsManagementComponent', () => {
  let component: SeatsManagementComponent;
  let fixture: ComponentFixture<SeatsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
