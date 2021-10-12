import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaghureddyComponent } from './raghureddy.component';

describe('RaghureddyComponent', () => {
  let component: RaghureddyComponent;
  let fixture: ComponentFixture<RaghureddyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaghureddyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaghureddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
