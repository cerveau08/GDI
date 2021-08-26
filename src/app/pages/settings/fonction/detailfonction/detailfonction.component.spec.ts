import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailfonctionComponent } from './detailfonction.component';

describe('DetailfonctionComponent', () => {
  let component: DetailfonctionComponent;
  let fixture: ComponentFixture<DetailfonctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailfonctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailfonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
