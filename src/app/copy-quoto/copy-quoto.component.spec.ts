import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyQuotoComponent } from './copy-quoto.component';

describe('CopyQuotoComponent', () => {
  let component: CopyQuotoComponent;
  let fixture: ComponentFixture<CopyQuotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopyQuotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyQuotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
