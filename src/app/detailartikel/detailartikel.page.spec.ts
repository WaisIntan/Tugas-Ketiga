import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailartikelPage } from './detailartikel.page';

describe('DetailartikelPage', () => {
  let component: DetailartikelPage;
  let fixture: ComponentFixture<DetailartikelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailartikelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailartikelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
