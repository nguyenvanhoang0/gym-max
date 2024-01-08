
import { IGeneralGenre , IGeneralGenreInterface , ICreateGeneralGenre } from '../general_genre/general-genre-interface';
import { IExercise , IExercises } from '../exercise/exercise-interface';
import {  IAuthor} from '../user/user-interface';


export interface createdWorkoutsInterface {
    $id: string;
    $values: bigExercises[];
}

export interface bigExercises {
    id: number;
    target: string;
    category: string;
    point: number;
    userId: number;
    private: boolean;
    status: string;
    exercises :IExercises[];
}

// export interface exerciseInterface {
//     $id: string;
//     $values: ExerciseInterface[];
// }

// export interface exercise {
//     id: number;
//     content: string;
//     quantity: number;
//     time: number;
//     category: string;
//     point: number;
//     userId: number;
//     evaluate: number;
// }

export interface bigExercisesByAuthor {
    $id: string;
    $values: {
      id: number;
      target: string;
      point: number;
      userId: number;
      status: string;
      private: boolean;

      username: string;
      email: string;
      dateOfBirth: Date;
      gender: string;
      avatarPath: string;
      introduction: string;
      educationLevel: string;
      role: string;

      generalGenre: IGeneralGenre
    }[];
  }
  

  export interface targetData {
    $id: string;
    id: number;
    target: string;
    point: number;
    userId: number;
    followers:  number;
    status: string;
    private: boolean;
    generalGenre: IGeneralGenre;
    exercises: IExercises;
    author: IAuthor;
  }
  
  
  
  
  