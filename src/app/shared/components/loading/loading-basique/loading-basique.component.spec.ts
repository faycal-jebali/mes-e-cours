import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LoadingBasiqueComponent } from './loading-basique.component';

describe('LoadingBasiqueComponent', () => {
  let component: LoadingBasiqueComponent;
  let fixture: ComponentFixture<LoadingBasiqueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingBasiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingBasiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
