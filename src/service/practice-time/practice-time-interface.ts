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
