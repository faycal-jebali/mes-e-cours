import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCarrouselComponent } from './item-carrousel.component';

describe('ItemCarrouselComponent', () => {
  let component: ItemCarrouselComponent;
  let fixture: ComponentFixture<ItemCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
