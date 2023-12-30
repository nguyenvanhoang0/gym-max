export interface ExerciseInterface {
    name: string;
    description: string;
    point: number;
    userId: number;
    categoryId: number;
    // status: string;
}

export interface ExercisesInterface {
    $id: string;
    $values: ExerciseInterface[];
}
