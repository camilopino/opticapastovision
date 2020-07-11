/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MetalicaDamaComponent } from './metalica-dama.component';

describe('MetalicaDamaComponent', () => {
  let component: MetalicaDamaComponent;
  let fixture: ComponentFixture<MetalicaDamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetalicaDamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalicaDamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
