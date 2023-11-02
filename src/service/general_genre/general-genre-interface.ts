export interface GeneralGenreInterface {
    id : number;
    name: number;
    description: string;
    select: boolean ;
}

export interface GeneralGenre {
    $id: string;
    $values: GeneralGenreInterface[];
}
