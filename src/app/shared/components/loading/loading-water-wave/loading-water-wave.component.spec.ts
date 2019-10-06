import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingWaterWaveComponent } from './loading-water-wave.component';

describe('LoadingWaterWaveComponent', () => {
  let component: LoadingWaterWaveComponent;
  let fixture: ComponentFixture<LoadingWaterWaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingWaterWaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingWaterWaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
