import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferalUnapprovedQuotesComponent } from './referal-unapproved-quotes.component';

describe('ReferalUnapprovedQuotesComponent', () => {
  let component: ReferalUnapprovedQuotesComponent;
  let fixture: ComponentFixture<ReferalUnapprovedQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferalUnapprovedQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferalUnapprovedQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
