import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AjoutcategorieComponent } from './ajoutcategorie.component';

describe('AjoutcategorieComponent', () => {
  let component: AjoutcategorieComponent;
  let fixture: ComponentFixture<AjoutcategorieComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutcategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
