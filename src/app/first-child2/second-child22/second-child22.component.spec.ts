import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondChild22Component } from './second-child22.component';

describe('SecondChild22Component', () => {
  let component: SecondChild22Component;
  let fixture: ComponentFixture<SecondChild22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondChild22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondChild22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
