import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddmanagerComponent } from './addmanager.component';

describe('AddmanagerComponent', () => {
  let component: AddmanagerComponent;
  let fixture: ComponentFixture<AddmanagerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
