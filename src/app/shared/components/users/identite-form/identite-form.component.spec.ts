import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { IdentiteFormComponent } from "./identite-form.component";

xdescribe("IdentiteFormComponent", () => {
  let component: IdentiteFormComponent;
  let fixture: ComponentFixture<IdentiteFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [IdentiteFormComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
