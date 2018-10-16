import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrizeMainComponent } from './prize-main.component';

describe('PrizeMainComponent', () => {
  let component: PrizeMainComponent;
  let fixture: ComponentFixture<PrizeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrizeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrizeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
