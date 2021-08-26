import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildomaineComponent } from './detaildomaine.component';

describe('DetaildomaineComponent', () => {
  let component: DetaildomaineComponent;
  let fixture: ComponentFixture<DetaildomaineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaildomaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaildomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
