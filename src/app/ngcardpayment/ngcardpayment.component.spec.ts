import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgcardpaymentComponent } from './ngcardpayment.component';

describe('NgcardpaymentComponent', () => {
  let component: NgcardpaymentComponent;
  let fixture: ComponentFixture<NgcardpaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgcardpaymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgcardpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
