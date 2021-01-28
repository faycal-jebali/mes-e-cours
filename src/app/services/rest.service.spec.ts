import { TestBed, inject } from "@angular/core/testing";

import { RestService } from "./rest.service";

xdescribe("RestService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestService],
    });
  });

  it("should be created", inject([RestService], (service: RestService) => {
    expect(service).toBeTruthy();
  }));
});
