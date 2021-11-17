import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModiffonctionComponent } from './modiffonction.component';

describe('ModiffonctionComponent', () => {
  let component: ModiffonctionComponent;
  let fixture: ComponentFixture<ModiffonctionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModiffonctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiffonctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
