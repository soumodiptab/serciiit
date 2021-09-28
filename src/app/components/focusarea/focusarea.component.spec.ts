import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusareaComponent } from './focusarea.component';

describe('FocusareaComponent', () => {
  let component: FocusareaComponent;
  let fixture: ComponentFixture<FocusareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
