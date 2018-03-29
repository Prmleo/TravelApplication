import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuredInfoemationComponent } from './insured-infoemation.component';

describe('InsuredInfoemationComponent', () => {
  let component: InsuredInfoemationComponent;
  let fixture: ComponentFixture<InsuredInfoemationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuredInfoemationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuredInfoemationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
