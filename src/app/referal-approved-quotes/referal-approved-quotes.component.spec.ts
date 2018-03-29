import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalApprovedQuotesComponent } from './referal-approved-quotes.component';

describe('ReferalApprovedQuotesComponent', () => {
  let component: ReferalApprovedQuotesComponent;
  let fixture: ComponentFixture<ReferalApprovedQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferalApprovedQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalApprovedQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
