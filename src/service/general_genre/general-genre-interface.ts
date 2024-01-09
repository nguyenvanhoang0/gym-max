import {  targetData} from '../big-exercises/big-exercises-interface';
import {  ICategorys} from '../Category/category-interface';


export interface IGeneralGenreInterface {
    id : number;
    name: number;
    description: string;
    select: boolean ;
}

export interface ICreateGeneralGenre {
    name: string;
    description: string;
}


export interface IGeneralGenre {
    $id: string;
    $values: IGeneralGenreInterface[];
}

export interface GeneralGenreDetails {
    $id: string;
    id: number;
    name: string;
    description: string;
    numberOfUses: number;
    point: number;
    category: ICategorys;
    target: {
      $id: string;
      $values: targetData[];
    };
  }
