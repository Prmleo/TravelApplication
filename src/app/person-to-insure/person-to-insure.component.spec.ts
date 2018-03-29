import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonToInsureComponent } from './person-to-insure.component';

describe('PersonToInsureComponent', () => {
  let component: PersonToInsureComponent;
  let fixture: ComponentFixture<PersonToInsureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonToInsureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonToInsureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
