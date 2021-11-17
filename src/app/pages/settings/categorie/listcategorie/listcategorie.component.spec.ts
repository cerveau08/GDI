import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListcategorieComponent } from './listcategorie.component';

describe('ListcategorieComponent', () => {
  let component: ListcategorieComponent;
  let fixture: ComponentFixture<ListcategorieComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
