import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViswanathkComponent } from './viswanathk.component';

describe('ViswanathkComponent', () => {
  let component: ViswanathkComponent;
  let fixture: ComponentFixture<ViswanathkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViswanathkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViswanathkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
