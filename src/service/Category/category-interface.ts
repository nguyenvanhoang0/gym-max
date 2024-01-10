import {  IAuthor} from '../user/user-interface';
import {  ItargetData} from '../big-exercises/big-exercises-interface';


export interface ICategory {
    id: number;
    name: number;
    description: string;
    point: string;
    userId: number;
    defaultColor : string;
}




export interface ICategorys {
    $id: string;
    $values: ICategory[];
}

