import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RameshloganathanComponent } from './rameshloganathan.component';

describe('RameshloganathanComponent', () => {
  let component: RameshloganathanComponent;
  let fixture: ComponentFixture<RameshloganathanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RameshloganathanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RameshloganathanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
