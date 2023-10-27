import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigExerciseDetailsComponent } from './big-exercise-details.component';

describe('BigExerciseDetailsComponent', () => {
  let component: BigExerciseDetailsComponent;
  let fixture: ComponentFixture<BigExerciseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigExerciseDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigExerciseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
