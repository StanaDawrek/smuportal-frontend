import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookManagementAdminComponent } from './book-management-admin.component';

describe('BookManagementAdminComponent', () => {
  let component: BookManagementAdminComponent;
  let fixture: ComponentFixture<BookManagementAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookManagementAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookManagementAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
