import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenkatestcComponent } from './venkatestc.component';

describe('VenkatestcComponent', () => {
  let component: VenkatestcComponent;
  let fixture: ComponentFixture<VenkatestcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenkatestcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenkatestcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
