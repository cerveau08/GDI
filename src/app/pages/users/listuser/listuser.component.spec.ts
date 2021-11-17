import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListuserComponent } from './listuser.component';

describe('ListuserComponent', () => {
  let component: ListuserComponent;
  let fixture: ComponentFixture<ListuserComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
