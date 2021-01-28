import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { ItemCarrouselComponent } from "./item-carrousel.component";

xdescribe("ItemCarrouselComponent", () => {
  let component: ItemCarrouselComponent;
  let fixture: ComponentFixture<ItemCarrouselComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ItemCarrouselComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
