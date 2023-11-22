export interface PracticeTime {
  id: number;
  timeStart: string;
  myWorkoutId:number,

  exerciseId: number;
  bigExerciseId: number;
  categoryId: number;
  name: string;
  target: string;
  description: string;
  quantity: number;
  time: number;
  point: number;
  evaluate: number;
  categoryName: string;
  descriptionCategory: string;
  categoryColor: string;
  categoryDefaultColor: string;
  defaultColor: string;
}


export interface MyWorkoutInterface {
    $id: string;
    $values: PracticeTime[];
}

//--------------------------------------------------------------------------//

export interface MyBigExerciseInterface {
  $id: string;
  $values: MyWorkoutData[];
}

export interface MyWorkoutData {
  $id: string;
  id: number;
  timeStart: Date;
  color: string;
  bigExerciseId: number;
  userId: number;
  bigExercise: BigExerciseData;
  user: null;
}

export interface BigExerciseData {
  $id: string;
  id: number;
  target: string;
  // category: string;
  point: number;
  userId: number;
  private: boolean;
  status: string;
  user: null;
  // myWorkouts: MyWorkoutReferenceData[];
  practiceTimes: null;
}

export interface MonthlyData {
  id: number;
  timeStart: string;
  bigExercise: {
    id: number;
    target: string;
    // category: string;
    point: number;
    userId: number;
    private: boolean;
    status: string;
  };
}

//--------

export interface UpdateMyWorkout {
  id: number;
  // timeStart: Date;
  color: string;
}
