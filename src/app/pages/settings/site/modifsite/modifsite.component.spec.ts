import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModifsiteComponent } from './modifsite.component';

describe('ModifsiteComponent', () => {
  let component: ModifsiteComponent;
  let fixture: ComponentFixture<ModifsiteComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
