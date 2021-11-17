import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListperiodeComponent } from './listperiode.component';

describe('ListperiodeComponent', () => {
  let component: ListperiodeComponent;
  let fixture: ComponentFixture<ListperiodeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListperiodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListperiodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
