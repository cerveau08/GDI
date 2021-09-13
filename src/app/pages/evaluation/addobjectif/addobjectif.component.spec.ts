import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddobjectifComponent } from './addobjectif.component';

describe('AddobjectifComponent', () => {
  let component: AddobjectifComponent;
  let fixture: ComponentFixture<AddobjectifComponent>;

  beforeEach(async(() => {
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
