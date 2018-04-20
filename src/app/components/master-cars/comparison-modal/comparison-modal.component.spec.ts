import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparisonModalComponent } from './comparison-modal.component';

describe('ComparisonModalComponent', () => {
  let component: ComparisonModalComponent;
  let fixture: ComponentFixture<ComparisonModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparisonModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparisonModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
