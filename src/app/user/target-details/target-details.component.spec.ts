import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetDetailsComponent } from './target-details.component';

describe('TargetDetailsComponent', () => {
  let component: TargetDetailsComponent;
  let fixture: ComponentFixture<TargetDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TargetDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TargetDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
