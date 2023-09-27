export interface FormQuestion {
}


export interface InputFormAttribute {
    id: number;
    formId: number;
    label: string;
    type: string;
    checked: string;
    placeholder: string;
    value: string;
    name: string;
    content_class: string;
    img: string;
    // $values: InputFormAttribute[];
}

export interface InputForm {
    id: number;
    category_name: string;
    tile: string;
    img: string;
    class: string;
    inputAttributes: FormQuestionResponse[];
    
}

export interface FormQuestionResponse {
    $id: string;
    $values: InputFormAttribute[];
}
