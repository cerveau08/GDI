import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsiteComponent } from './detailsite.component';

describe('DetailsiteComponent', () => {
  let component: DetailsiteComponent;
  let fixture: ComponentFixture<DetailsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
