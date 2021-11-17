import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModifdomaineComponent } from './modifdomaine.component';

describe('ModifdomaineComponent', () => {
  let component: ModifdomaineComponent;
  let fixture: ComponentFixture<ModifdomaineComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifdomaineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifdomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
