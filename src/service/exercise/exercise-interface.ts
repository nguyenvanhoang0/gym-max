import {  IAuthor} from '../user/user-interface';
import {  ItargetData} from '../big-exercises/big-exercises-interface';


export interface ICreateExercise{
    name: string;
    description: string;
    point: number;
    userId: number;
    categoryId: number;
    // status: string;
}


export interface IExercise{
    id : number;
    name: string;
    description: string;
    point: number;
    userId: number;
    categoryId: number;
    timeStart: string;
    exerciseId: number;
    quantity: number;
    time: number;
    categoryName: string;
    descriptionCategory: string;
    defaultColor: string;
    // status: string;
}

export interface IExercises {
    $id: string;
    $values: IExercise[];
}

export interface IExerciseDetails {
    $id: string;
    id: number;
    name: string;
    point: number;
    userId: number;
    description: string;
    numberOfUses: number;
    numberOfUsers: number;
    categoryName: string;
    descriptionCategory: string;
    author: IAuthor;
    target: {
      $id: string;
      $values: ItargetData[];
    };
  }


