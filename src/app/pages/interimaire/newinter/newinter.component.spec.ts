import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewinterComponent } from './newinter.component';

describe('NewinterComponent', () => {
  let component: NewinterComponent;
  let fixture: ComponentFixture<NewinterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
