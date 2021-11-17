import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RestaurationComponent } from './restauration.component';

describe('RestaurationComponent', () => {
  let component: RestaurationComponent;
  let fixture: ComponentFixture<RestaurationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
