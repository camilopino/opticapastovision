/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcetatoDamaComponent } from './acetato-dama.component';

describe('AcetatoDamaComponent', () => {
  let component: AcetatoDamaComponent;
  let fixture: ComponentFixture<AcetatoDamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcetatoDamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcetatoDamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
