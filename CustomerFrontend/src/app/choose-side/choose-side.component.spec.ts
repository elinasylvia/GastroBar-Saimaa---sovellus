import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSideComponent } from './choose-side.component';

describe('ChooseSideComponent', () => {
  let component: ChooseSideComponent;
  let fixture: ComponentFixture<ChooseSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseSideComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ChooseSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
