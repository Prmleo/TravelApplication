import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LapsedQuotesComponent } from './lapsed-quotes.component';

describe('LapsedQuotesComponent', () => {
  let component: LapsedQuotesComponent;
  let fixture: ComponentFixture<LapsedQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LapsedQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LapsedQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
