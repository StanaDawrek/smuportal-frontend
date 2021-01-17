import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateMainPageComponent } from './private-main-page.component';

describe('PrivateMainPageComponent', () => {
  let component: PrivateMainPageComponent;
  let fixture: ComponentFixture<PrivateMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
