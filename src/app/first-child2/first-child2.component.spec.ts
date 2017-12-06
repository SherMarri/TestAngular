import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChild2Component } from './first-child2.component';

describe('FirstChild2Component', () => {
  let component: FirstChild2Component;
  let fixture: ComponentFixture<FirstChild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstChild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
