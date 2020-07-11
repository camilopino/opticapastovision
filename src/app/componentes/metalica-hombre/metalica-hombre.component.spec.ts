/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MetalicaHombreComponent } from './metalica-hombre.component';

describe('MetalicaHombreComponent', () => {
  let component: MetalicaHombreComponent;
  let fixture: ComponentFixture<MetalicaHombreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalicaHombreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalicaHombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
