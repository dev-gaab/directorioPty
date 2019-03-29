import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcherPage } from './searcher.page';

describe('SearcherPage', () => {
  let component: SearcherPage;
  let fixture: ComponentFixture<SearcherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
