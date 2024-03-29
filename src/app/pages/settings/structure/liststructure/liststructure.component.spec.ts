import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListstructureComponent } from './liststructure.component';

describe('ListstructureComponent', () => {
  let component: ListstructureComponent;
  let fixture: ComponentFixture<ListstructureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListstructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
