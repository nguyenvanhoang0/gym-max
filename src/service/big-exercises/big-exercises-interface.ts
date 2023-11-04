
import { GeneralGenre , GeneralGenreInterface , createGeneralGenre } from '../general_genre/general-genre-interface';


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
    exercises :exerciseInterface[];
}

export interface exerciseInterface {
    $id: string;
    $values: exercise[];
}

export interface exercise {
    id: number;
    content: string;
    quantity: number;
    time: number;
    category: string;
    point: number;
    userId: number;
    evaluate: number;
}

export interface bigExercisesByAuthor {
    $id: string;
    $values: {
      id: number;
      target: string;
      point: number;
      userId: number;
      status: string;
      private: boolean;
      generalGenre: {
        $id: string;
        $values: GeneralGenreInterface[];
      };
    }[];
  }
  
  
  
  
  
  