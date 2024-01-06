export interface ICreateExercise{
    name: string;
    description: string;
    point: number;
    userId: number;
    categoryId: number;
    // status: string;
}


export interface IExercise{
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


