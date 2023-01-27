import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPageOneComponent } from './item-page-one.component';

describe('ItemPageOneComponent', () => {
  let component: ItemPageOneComponent;
  let fixture: ComponentFixture<ItemPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
