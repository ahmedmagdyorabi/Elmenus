import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverByMoodsComponent } from './discover-by-moods.component';

describe('DiscoverByMoodsComponent', () => {
  let component: DiscoverByMoodsComponent;
  let fixture: ComponentFixture<DiscoverByMoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverByMoodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverByMoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
