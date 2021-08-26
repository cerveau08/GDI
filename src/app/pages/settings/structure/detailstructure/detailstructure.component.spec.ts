import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailstructureComponent } from './detailstructure.component';

describe('DetailstructureComponent', () => {
  let component: DetailstructureComponent;
  let fixture: ComponentFixture<DetailstructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailstructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
