import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BanniereComponent } from './banniere.component';

describe('BanniereComponent', () => {
  let component: BanniereComponent;
  let fixture: ComponentFixture<BanniereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BanniereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BanniereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
