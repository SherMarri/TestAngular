import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChild11Component } from './second-child11.component';

describe('SecondChild11Component', () => {
  let component: SecondChild11Component;
  let fixture: ComponentFixture<SecondChild11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondChild11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondChild11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
