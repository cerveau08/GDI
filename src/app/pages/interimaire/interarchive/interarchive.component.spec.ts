import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InterarchiveComponent } from './interarchive.component';

describe('InterarchiveComponent', () => {
  let component: InterarchiveComponent;
  let fixture: ComponentFixture<InterarchiveComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InterarchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterarchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
