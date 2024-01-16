import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoExercisesComponent } from './no-exercises.component';

describe('NoExercisesComponent', () => {
  let component: NoExercisesComponent;
  let fixture: ComponentFixture<NoExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoExercisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
