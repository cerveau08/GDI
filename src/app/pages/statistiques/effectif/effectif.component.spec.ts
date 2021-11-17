import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EffectifComponent } from './effectif.component';

describe('EffectifComponent', () => {
  let component: EffectifComponent;
  let fixture: ComponentFixture<EffectifComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
