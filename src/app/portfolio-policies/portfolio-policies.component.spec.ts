import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPoliciesComponent } from './portfolio-policies.component';

describe('PortfolioPoliciesComponent', () => {
  let component: PortfolioPoliciesComponent;
  let fixture: ComponentFixture<PortfolioPoliciesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPoliciesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPoliciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
