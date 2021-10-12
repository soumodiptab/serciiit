import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KesavvComponent } from './kesavv.component';

describe('KesavvComponent', () => {
  let component: KesavvComponent;
  let fixture: ComponentFixture<KesavvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KesavvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KesavvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
