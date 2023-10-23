import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedExercisesComponent } from './created-exercises.component';

describe('CreatedExercisesComponent', () => {
  let component: CreatedExercisesComponent;
  let fixture: ComponentFixture<CreatedExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedExercisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
