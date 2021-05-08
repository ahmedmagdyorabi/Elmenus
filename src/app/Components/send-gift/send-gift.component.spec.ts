/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SendGiftComponent } from './send-gift.component';

describe('SendGiftComponent', () => {
  let component: SendGiftComponent;
  let fixture: ComponentFixture<SendGiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendGiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendGiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
