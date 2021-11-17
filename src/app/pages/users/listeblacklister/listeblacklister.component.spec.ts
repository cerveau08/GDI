import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListeblacklisterComponent } from './listeblacklister.component';

describe('ListeblacklisterComponent', () => {
  let component: ListeblacklisterComponent;
  let fixture: ComponentFixture<ListeblacklisterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeblacklisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeblacklisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
