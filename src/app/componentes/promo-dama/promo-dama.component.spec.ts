/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PromoDamaComponent } from './promo-dama.component';

describe('PromoDamaComponent', () => {
  let component: PromoDamaComponent;
  let fixture: ComponentFixture<PromoDamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoDamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoDamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
