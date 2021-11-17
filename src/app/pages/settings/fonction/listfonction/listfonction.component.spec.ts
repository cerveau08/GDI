import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListfonctionComponent } from './listfonction.component';

describe('ListfonctionComponent', () => {
  let component: ListfonctionComponent;
  let fixture: ComponentFixture<ListfonctionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListfonctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListfonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
