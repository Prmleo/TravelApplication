import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioCancelledPolicyComponent } from './portfolio-cancelled-policy.component';

describe('PortfolioCancelledPolicyComponent', () => {
  let component: PortfolioCancelledPolicyComponent;
  let fixture: ComponentFixture<PortfolioCancelledPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioCancelledPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioCancelledPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
