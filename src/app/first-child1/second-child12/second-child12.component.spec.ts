import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChild12Component } from './second-child12.component';

describe('SecondChild12Component', () => {
  let component: SecondChild12Component;
  let fixture: ComponentFixture<SecondChild12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondChild12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondChild12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
