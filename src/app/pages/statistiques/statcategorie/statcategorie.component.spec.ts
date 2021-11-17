import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StatcategorieComponent } from './statcategorie.component';

describe('StatcategorieComponent', () => {
  let component: StatcategorieComponent;
  let fixture: ComponentFixture<StatcategorieComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StatcategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
