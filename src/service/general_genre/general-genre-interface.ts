export interface GeneralGenreInterface {
    name: number;
    description: string;
    select: boolean ;
}

export interface GeneralGenre {
    $id: string;
    $values: GeneralGenreInterface[];
}
