import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCustomerDialogComponent } from './addCustomer-dialog.component';

describe('JobDialogComponent', () => {
  let component: AddCustomerDialogComponent;
  let fixture: ComponentFixture<AddCustomerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCustomerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
