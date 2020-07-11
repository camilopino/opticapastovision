/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PromoHombreComponent } from './promo-hombre.component';

describe('PromoHombreComponent', () => {
  let component: PromoHombreComponent;
  let fixture: ComponentFixture<PromoHombreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoHombreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
