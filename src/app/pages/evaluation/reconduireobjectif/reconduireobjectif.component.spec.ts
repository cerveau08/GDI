import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReconduireobjectifComponent } from './reconduireobjectif.component';

describe('ReconduireobjectifComponent', () => {
  let component: ReconduireobjectifComponent;
  let fixture: ComponentFixture<ReconduireobjectifComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReconduireobjectifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconduireobjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
