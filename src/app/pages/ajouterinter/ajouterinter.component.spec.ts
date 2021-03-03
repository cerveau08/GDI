import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterinterComponent } from './ajouterinter.component';

describe('AjouterinterComponent', () => {
  let component: AjouterinterComponent;
  let fixture: ComponentFixture<AjouterinterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterinterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterinterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
