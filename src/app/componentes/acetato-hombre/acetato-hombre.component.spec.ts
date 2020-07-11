/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcetatoHombreComponent } from './acetato-hombre.component';

describe('AcetatoHombreComponent', () => {
  let component: AcetatoHombreComponent;
  let fixture: ComponentFixture<AcetatoHombreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcetatoHombreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcetatoHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
