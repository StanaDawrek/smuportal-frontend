import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopieConformeComponent } from './copie-conforme.component';

describe('CopieConformeComponent', () => {
  let component: CopieConformeComponent;
  let fixture: ComponentFixture<CopieConformeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopieConformeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopieConformeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
