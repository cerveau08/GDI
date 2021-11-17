import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListsocieteComponent } from './listsociete.component';

describe('ListsocieteComponent', () => {
  let component: ListsocieteComponent;
  let fixture: ComponentFixture<ListsocieteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
