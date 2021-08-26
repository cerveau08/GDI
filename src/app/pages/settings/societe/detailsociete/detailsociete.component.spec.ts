import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsocieteComponent } from './detailsociete.component';

describe('DetailsocieteComponent', () => {
  let component: DetailsocieteComponent;
  let fixture: ComponentFixture<DetailsocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
