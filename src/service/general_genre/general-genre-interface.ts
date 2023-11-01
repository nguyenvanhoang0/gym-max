export interface GeneralGenreInterface {
    name: number;
    description: string;
}

export interface GeneralGenre {
    $id: string;
    $values: GeneralGenreInterface[];
}
