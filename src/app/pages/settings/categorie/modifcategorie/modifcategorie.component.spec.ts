import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModifcategorieComponent } from './modifcategorie.component';

describe('ModifcategorieComponent', () => {
  let component: ModifcategorieComponent;
  let fixture: ComponentFixture<ModifcategorieComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifcategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
