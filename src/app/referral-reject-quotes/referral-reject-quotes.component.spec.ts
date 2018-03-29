import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralRejectQuotesComponent } from './referral-reject-quotes.component';

describe('ReferralRejectQuotesComponent', () => {
  let component: ReferralRejectQuotesComponent;
  let fixture: ComponentFixture<ReferralRejectQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralRejectQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralRejectQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
