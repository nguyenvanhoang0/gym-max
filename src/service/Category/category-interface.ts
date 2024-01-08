import {  IAuthor} from '../user/user-interface';
import {  targetData} from '../big-exercises/big-exercises-interface';


export interface CategoryInterface {
    id: number;
    name: number;
    description: string;
    point: string;
    userId: number;
    defaultColor : string;
}




export interface ICategorys {
    $id: string;
    $values: CategoryInterface[];
}

