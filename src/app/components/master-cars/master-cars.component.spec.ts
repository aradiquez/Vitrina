import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCarsComponent } from './master-cars.component';

describe('MasterCarsComponent', () => {
  let component: MasterCarsComponent;
  let fixture: ComponentFixture<MasterCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
