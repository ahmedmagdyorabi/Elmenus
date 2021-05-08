import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverByCategoryComponent } from './discover-by-category.component';

describe('DiscoverByCategoryComponent', () => {
  let component: DiscoverByCategoryComponent;
  let fixture: ComponentFixture<DiscoverByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
