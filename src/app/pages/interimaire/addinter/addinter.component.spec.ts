import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddinterComponent } from './addinter.component';

describe('AddinterComponent', () => {
  let component: AddinterComponent;
  let fixture: ComponentFixture<AddinterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
