import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListsiteComponent } from './listsite.component';

describe('ListsiteComponent', () => {
  let component: ListsiteComponent;
  let fixture: ComponentFixture<ListsiteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
