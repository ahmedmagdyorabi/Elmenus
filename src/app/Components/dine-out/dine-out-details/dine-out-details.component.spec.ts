import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DineOutDetailsComponent } from './dine-out-details.component';

describe('DineOutDetailsComponent', () => {
  let component: DineOutDetailsComponent;
  let fixture: ComponentFixture<DineOutDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DineOutDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DineOutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
