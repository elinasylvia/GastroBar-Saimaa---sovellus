import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPageTwoComponent } from './item-page-two.component';

describe('ItemPageTwoComponent', () => {
  let component: ItemPageTwoComponent;
  let fixture: ComponentFixture<ItemPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
