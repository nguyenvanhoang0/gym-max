export interface CategoryInterface {
    id: number;
    name: number;
    description: string;
    point: string;
    userId: number;
}

export interface Category {
    $id: string;
    $values: CategoryInterface[];
}
