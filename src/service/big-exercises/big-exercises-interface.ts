
export interface createdWorkoutsInterface {
    $id: string;
    $values: BigExercises[];
}

export interface BigExercises {
    id: number;
    target: string;
    category: string;
    point: number;
    userId: number;
    private: boolean;
    status: string;
}
