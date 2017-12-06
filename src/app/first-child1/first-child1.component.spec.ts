import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstChild1Component } from './first-child1.component';

describe('FirstChild1Component', () => {
  let component: FirstChild1Component;
  let fixture: ComponentFixture<FirstChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
