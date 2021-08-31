import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsiteComponent } from './statsite.component';

describe('StatsiteComponent', () => {
  let component: StatsiteComponent;
  let fixture: ComponentFixture<StatsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
