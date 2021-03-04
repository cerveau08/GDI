import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurationdrhComponent } from './restaurationdrh.component';

describe('RestaurationdrhComponent', () => {
  let component: RestaurationdrhComponent;
  let fixture: ComponentFixture<RestaurationdrhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurationdrhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurationdrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
