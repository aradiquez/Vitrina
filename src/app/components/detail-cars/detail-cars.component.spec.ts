import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCarsComponent } from './detail-cars.component';

describe('DetailCarsComponent', () => {
  let component: DetailCarsComponent;
  let fixture: ComponentFixture<DetailCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
