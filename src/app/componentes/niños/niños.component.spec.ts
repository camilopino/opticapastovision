/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NiñosComponent } from './niños.component';

describe('NiñosComponent', () => {
  let component: NiñosComponent;
  let fixture: ComponentFixture<NiñosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiñosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiñosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
