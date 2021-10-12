import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VasudevavarmaComponent } from './vasudevavarma.component';

describe('VasudevavarmaComponent', () => {
  let component: VasudevavarmaComponent;
  let fixture: ComponentFixture<VasudevavarmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VasudevavarmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VasudevavarmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
