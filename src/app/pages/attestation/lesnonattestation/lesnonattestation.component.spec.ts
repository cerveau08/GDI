import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesnonattestationComponent } from './lesnonattestation.component';

describe('LesnonattestationComponent', () => {
  let component: LesnonattestationComponent;
  let fixture: ComponentFixture<LesnonattestationComponent>;

  beforeEach(async(() => {
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
