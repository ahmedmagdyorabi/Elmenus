import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverByDishesComponent } from './discover-by-dishes.component';

describe('DiscoverByDishesComponent', () => {
  let component: DiscoverByDishesComponent;
  let fixture: ComponentFixture<DiscoverByDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverByDishesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverByDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
