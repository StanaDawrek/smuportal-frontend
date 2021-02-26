import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirmServicesComponent } from './firm-services.component';

describe('FirmServicesComponent', () => {
  let component: FirmServicesComponent;
  let fixture: ComponentFixture<FirmServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirmServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirmServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
