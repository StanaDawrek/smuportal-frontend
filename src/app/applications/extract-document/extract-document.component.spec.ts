import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtractDocumentComponent } from './extract-document.component';

describe('ExtractDocumentComponent', () => {
  let component: ExtractDocumentComponent;
  let fixture: ComponentFixture<ExtractDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtractDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtractDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
