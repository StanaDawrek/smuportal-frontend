import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmsAddBookComponent } from './bms-add-book.component';

describe('BmsAddBookComponent', () => {
  let component: BmsAddBookComponent;
  let fixture: ComponentFixture<BmsAddBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmsAddBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmsAddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
