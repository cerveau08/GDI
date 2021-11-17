import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListermanagerComponent } from './listermanager.component';

describe('ListermanagerComponent', () => {
  let component: ListermanagerComponent;
  let fixture: ComponentFixture<ListermanagerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListermanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListermanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
