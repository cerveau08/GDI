import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddobjectifComponent } from './addobjectif.component';

describe('AddobjectifComponent', () => {
  let component: AddobjectifComponent;
  let fixture: ComponentFixture<AddobjectifComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddobjectifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddobjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
