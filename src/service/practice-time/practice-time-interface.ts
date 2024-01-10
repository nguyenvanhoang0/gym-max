// practice-time.interface.ts
export interface PracticeTime {
  id: number;
  timeStart: string;
  exerciseId: number;
  name: string;
  description: string;
  quantity: number;
  time: number;
  category: string;
  point: number;
  evaluate: number;
}


export interface PracticeTimes {
    $id: string;
    $values: PracticeTime[];
}

export interface IPracticeTime {
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