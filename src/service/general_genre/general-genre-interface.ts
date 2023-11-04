export interface GeneralGenreInterface {
    id : number;
    name: number;
    description: string;
    select: boolean ;
}

export interface createGeneralGenre {
    name: string;
    description: string;
}


export interface GeneralGenre {
    $id: string;
    $values: GeneralGenreInterface[];
}
