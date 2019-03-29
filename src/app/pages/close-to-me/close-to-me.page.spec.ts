import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseToMePage } from './close-to-me.page';

describe('CloseToMePage', () => {
  let component: CloseToMePage;
  let fixture: ComponentFixture<CloseToMePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseToMePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseToMePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
