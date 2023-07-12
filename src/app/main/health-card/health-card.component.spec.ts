import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCardComponent } from './health-card.component';

describe('HealthCardComponent', () => {
  let component: HealthCardComponent;
  let fixture: ComponentFixture<HealthCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
