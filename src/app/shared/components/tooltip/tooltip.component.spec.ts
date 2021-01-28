import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ToolTipComponent } from "./tooltip.component";

xdescribe("ToolTipComponent", () => {
  let component: ToolTipComponent;
  let fixture: ComponentFixture<ToolTipComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ToolTipComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
