import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsolationExercisesComponent } from './isolation-exercises.component';

describe('IsolationExercisesComponent', () => {
  let component: IsolationExercisesComponent;
  let fixture: ComponentFixture<IsolationExercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsolationExercisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsolationExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
