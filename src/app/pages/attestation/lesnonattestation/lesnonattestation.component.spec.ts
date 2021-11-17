import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LesnonattestationComponent } from './lesnonattestation.component';

describe('LesnonattestationComponent', () => {
  let component: LesnonattestationComponent;
  let fixture: ComponentFixture<LesnonattestationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LesnonattestationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesnonattestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
