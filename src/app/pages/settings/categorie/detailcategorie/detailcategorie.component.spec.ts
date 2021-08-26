import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcategorieComponent } from './detailcategorie.component';

describe('DetailcategorieComponent', () => {
  let component: DetailcategorieComponent;
  let fixture: ComponentFixture<DetailcategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailcategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailcategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
