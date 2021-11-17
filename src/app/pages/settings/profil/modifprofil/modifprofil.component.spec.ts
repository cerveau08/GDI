import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModifprofilComponent } from './modifprofil.component';

describe('ModifprofilComponent', () => {
  let component: ModifprofilComponent;
  let fixture: ComponentFixture<ModifprofilComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifprofilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifprofilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
