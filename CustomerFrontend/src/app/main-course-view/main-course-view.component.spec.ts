import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCourseViewComponent } from './main-course-view.component';

describe('MainCourseViewComponent', () => {
  let component: MainCourseViewComponent;
  let fixture: ComponentFixture<MainCourseViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainCourseViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainCourseViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
