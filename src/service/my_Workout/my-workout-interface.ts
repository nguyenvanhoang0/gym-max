import {  IAuthor} from '../user/user-interface';
import {  IbigExercises , ItargetData} from '../big-exercises/big-exercises-interface';
import {  IPracticeTime } from '../practice-time/practice-time-interface';





export interface IMyWorkout {
    $id: string;
    $values: IPracticeTime[];
}

//--------------------------------------------------------------------------//

export interface IMyBigExercise {
  $id: string;
  $values: IMyWorkoutData[];
}

export interface IMyWorkoutData {
  $id: string;
  id: number;
  timeStart: Date;
  color: string;
  bigExerciseId: number;
  userId: number;
  bigExercise: ItargetData;
  user: null;
}



//___________________________________________________________________

export interface IMonthlyData {
  id: number;
  timeStart: string;
  bigExercise: {
    id: number;
    target: string;
    // category: string;
    point: number;
    author: IAuthor;
    // avatar_author 
    private: boolean;
    status: string;
  };
}

//--------

export interface IUpdateMyWorkout {
  id: number;
  // timeStart: Date;
  color: string;
}
