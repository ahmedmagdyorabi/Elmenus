import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverByLocationComponent } from './discover-by-location.component';

describe('DiscoverByLocationComponent', () => {
  let component: DiscoverByLocationComponent;
  let fixture: ComponentFixture<DiscoverByLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverByLocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverByLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
