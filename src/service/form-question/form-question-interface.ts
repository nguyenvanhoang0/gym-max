export interface FormQuestion {
}


export interface InputFormAttribute {
    id: number;
    formId: number;
    label: string;
    checked: string;
    placeholder: string;
    value: string;
    name: string;
    content_class: string;
    img: string;
}

export interface InputForm {
    id: number;
    category_name: string;
    tile: string;
    img: string;
    class: string;
    inputAttributes: InputFormAttribute[];
}

export interface FormQuestionResponse {
    $id: string;
    $values: InputForm[];
}
