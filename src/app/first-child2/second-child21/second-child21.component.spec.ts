import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChild21Component } from './second-child21.component';

describe('SecondChild21Component', () => {
  let component: SecondChild21Component;
  let fixture: ComponentFixture<SecondChild21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondChild21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondChild21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
