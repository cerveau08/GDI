import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedrhComponent } from './homedrh.component';

describe('HomedrhComponent', () => {
  let component: HomedrhComponent;
  let fixture: ComponentFixture<HomedrhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedrhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
