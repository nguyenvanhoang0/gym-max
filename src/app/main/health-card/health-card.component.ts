import { Component } from '@angular/core';

interface properties {
  label: string[];
  type: string;
  checked: string;
  placeholder: string;
  value: string[];
  name: string;
  id: string;
  class: string;
  img: string;
}

interface input {
  tile: string;
  img: string;
  class: string;
  contents: properties[];
}





@Component({
  selector: 'app-health-card',
  templateUrl: './health-card.component.html',
  styleUrls: ['./health-card.component.css']
})
export class HealthCardComponent {
  weight: number[] = [];
  height: number[] = [];
  gender: number[] = [];

  inputItems: input[] = [
    {
      tile: 'your birthday', img: '', class: '', contents: [
        { label: [''], type: 'date', checked: '', placeholder: '', value: [], name: 'age', id: 'age', class: 'input_text_number', img: '' }
      ]
    },
    {
      tile: 'gender', img: '', class: '', contents: [
        { label: ['male', 'female', 'other'], type: 'radio', checked: '', placeholder: '', value: ['male', 'female', 'other'], name: 'gender', id: '', class: '', img: '' }
      ]
    },
    {
      tile: 'What is your address', img: '', class: '', contents: [
        { label: ['address 1'], type: 'text', checked: '', placeholder: '', value: [''], name: 'address', id: '', class: 'input_text_number', img: '' },
        { label: ['address 2'], type: 'text', checked: '', placeholder: '', value: [''], name: 'address', id: '', class: 'input_text_number', img: '' },
        { label: ['address 3'], type: 'text', checked: '', placeholder: '', value: [''], name: 'address', id: '', class: 'input_text_number', img: '' }
      ]
    },
    {
      tile: 'your body index', img: '', class: '', contents: [
        { label: ['weight'], type: 'number', checked: '', placeholder: '', value: [], name: 'weight', id: 'weight', class: 'input_text_number', img: '' },
        { label: ['height'], type: 'number', checked: '', placeholder: '', value: [], name: 'height', id: 'height', class: 'input_text_number', img: '' }
      ]
    },
    {
      tile: 'health condition', img: '', class: 'checkbox_input', contents: [
        { label: ['Heart-related diseaes'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
        { label: ['Lung disease'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
        { label: ['Back pain'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
        { label: ['diseases related to bones and joints'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
        { label: ['Diabetes'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
        { label: ['Chronic lung disease'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
        { label: ['Kidney disease'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
        { label: ['Gastrointestinal diseases:'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
        { label: ['Infections'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
        { label: ['other'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
      ]
    },
  ];


  mot: number[] = [1, 1, 1];
  hai: number[] = [2, 2];
  ba: number[] = [3, 4, 5];

  tong: number[] = [...this.mot, ...this.hai, ...this.ba];
  arrays: number[][] = [this.mot, this.hai, this.ba];
}
