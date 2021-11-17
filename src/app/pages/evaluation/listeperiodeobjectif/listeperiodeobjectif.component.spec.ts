import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListeperiodeobjectifComponent } from './listeperiodeobjectif.component';

describe('ListeperiodeobjectifComponent', () => {
  let component: ListeperiodeobjectifComponent;
  let fixture: ComponentFixture<ListeperiodeobjectifComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeperiodeobjectifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeperiodeobjectifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
