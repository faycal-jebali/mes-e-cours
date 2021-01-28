import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";

import { AdresseFormComponent } from "./adresse-form.component";

xdescribe("AdresseFormComponent", () => {
  let component: AdresseFormComponent;
  let fixture: ComponentFixture<AdresseFormComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AdresseFormComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
