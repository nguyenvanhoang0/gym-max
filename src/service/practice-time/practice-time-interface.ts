// practice-time.interface.ts
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


export interface PracticeTimes {
    $id: string;
    $values: PracticeTime[];
}
