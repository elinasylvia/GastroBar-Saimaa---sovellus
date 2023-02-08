import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksViewComponent } from './drinks-view.component';

describe('DrinksViewComponent', () => {
  let component: DrinksViewComponent;
  let fixture: ComponentFixture<DrinksViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrinksViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrinksViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
