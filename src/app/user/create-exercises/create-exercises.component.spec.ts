import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExercisesComponent } from './create-exercises.component';

describe('CreateExercisesComponent', () => {
  let component: CreateExercisesComponent;
  let fixture: ComponentFixture<CreateExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExercisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
