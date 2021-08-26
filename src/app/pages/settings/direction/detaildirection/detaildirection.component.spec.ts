import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaildirectionComponent } from './detaildirection.component';

describe('DetaildirectionComponent', () => {
  let component: DetaildirectionComponent;
  let fixture: ComponentFixture<DetaildirectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaildirectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaildirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
