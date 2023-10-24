export interface PracticeTime {
  id: number;
  timeStart: string;
  timeEnd: string;
  exerciseId: number;
  content: string;
  quantity: number;
  time: number;
  category: string;
  point: number;
  evaluate: number;
}


export interface MyWorkoutInterface {
    $id: string;
    $values: PracticeTime[];
}
