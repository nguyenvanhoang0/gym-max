import { Component , ViewChild, ElementRef ,OnInit } from '@angular/core';
import { FormQuestionService } from '../../../service/form-question/form-question.service';
import { AuthService } from '../../../service/AuthService/auth.service';
import { UserInfo } from '../../../service/AuthService/auth-interface';
import { UserService } from '../../../service/user/user-service.service';

import { User , UserInterface } from '../../../service/user/user-interface';
import { AppComponent} from '../../app.component'
// interface properties {
//   label: string[];
//   type: string;
//   checked: string;
//   placeholder: string;
//   value: string[];
//   name: string;
//   id: string;
//   class: string;
//   img: string;
// }

// interface input {
//   tile: string;
//   img: string[];
//   class: string;
//   contents: properties[];
// }

// interface form {
//   category: string;
//   form: input[];
// }

interface avata {
  img: string;

}

@Component({
  selector: 'app-health-card',
  templateUrl: './health-card.component.html',
  styleUrls: ['./health-card.component.css']
})
export class HealthCardComponent implements OnInit{

  avata: avata[] = [
    {img: '../../../assets/img/avata_001.png',},
    {img: '../../../assets/img/avata_002.png',},
    {img: '../../../assets/img/avata_003.png',},
    {img: '../../../assets/img/avata_004.png',},
    {img: '../../../assets/img/avata_005.png',},
    {img: '../../../assets/img/avata_006.png',},
    {img: '../../../assets/img/avata_007.jpg',},
    {img: '../../../assets/img/avata_008.jpg',},
    {img: '../../../assets/img/avata_009.jpg',},
    {img: '../../../assets/img/avata_010.jpg',},
    {img: '../../../assets/img/avata_011.jpg',},
    {img: '../../../assets/img/avata_012.jpg',},
    {img: '../../../assets/img/avata_013.jpg',},
    {img: '../../../assets/img/avata_014.jpg',},
    {img: '../../../assets/img/avata_015.jpg',},
    {img: '../../../assets/img/avata_016.jpg',},
    {img: '../../../assets/img/avata_017.jpg',},
    {img: '../../../assets/img/avata_018.jpg',},
    {img: '../../../assets/img/avata_019.jpg',},
    {img: '../../../assets/img/avata_020.jpg',},
    {img: '../../../assets/img/avata_021.jpg',},
    
  
  ];

  selectedGender: string = 'default';
  selectedAvata: any;

  currentImg: string = '';
  onoffavata:boolean = false;
  next: boolean = false;
  formQuestions: any[] = []; 
  userInfo: User | null = null;
  constructor(
    private formQuestionService: FormQuestionService,
    private authService: AuthService,
    private userService: UserService,
    private appComponent: AppComponent
    ) { 
    this.formQuestions = [];
  }






  @ViewChild('myInput') myInput!: ElementRef;



  ngOnInit() {
    this.getRandomAvata();
    this.loadFormQuestions();
    this.getUser();
  }

  getUser(){
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        // Xử lý khi nhận được thông tin người dùng
        this.userInfo = userInfo;
        this.userService.getUserById(userInfo.id);
        console.log('User Info:', userInfo);
      },
      (error) => {
        // Xử lý lỗi khi gọi API hoặc token không hợp lệ
        console.error('Error:', error);
      }
    );
  }

  
  loadFormQuestions() {
    this.formQuestionService.getAllFormQuestions().subscribe(
      (response) => {
        // Xử lý dữ liệu sau khi nhận được từ API
        this.formQuestions = response.$values; // Đây có thể là một mảng hoặc đối tượng tùy theo API của bạn
        console.log(this.formQuestions);
        
      },
      (error) => {
        console.error(error);
      }
    );
  }

  focusInput() {
    this.myInput.nativeElement.focus();
  }

  toggleElementVisibility() {
    this.onoffavata = !this.onoffavata;
  }

  choose_avatar() {
    this.next = false;
  }

  nextAnimation() {
    this.next = !this.next;
    console.log("isAnimationStarted:", this.next);
  }

  getRandomAvata() {
    const randomIndex = Math.floor(Math.random() * this.avata.length);
    this.selectedAvata = this.avata[randomIndex];
    this.currentImg = this.selectedAvata.img;
  }

  selectAvata(avatar: any) {
    this.selectedAvata = avatar;
    this.currentImg = this.selectedAvata.img;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.currentImg = reader.result as string;
        this.toggleElementVisibility();
      };
    }
  }
}




  // inputItems: form[] = [

  //   {
  //     category: 'basic', form: [
  //       {
  //         tile: 'your birthday', img:[ '../../../assets/icon gym/birthday-date-100.png'], class: '', contents: [
  //           { label: [''], type: 'date', checked: '', placeholder: '', value: [], name: 'age', id: 'age', class: 'input_text_number', img: '' }
  //         ]
  //       },
  //       {
  //         tile: 'gender', img:[ '../../../assets/icon gym/gender-100 (1).png','../../../assets/icon gym/gender-100.png','../../../assets/icon gym/agender-symbol-100.png','../../../assets/icon gym/gender-100 (2).png',], class: '', contents: [
  //           { label: ['male', 'female', 'other'], type: 'radio', checked: '', placeholder: '', value: ['male', 'female', 'other'], name: 'gender', id: '', class: '', img: '' }
  //         ]
  //       },
  //       {
  //         tile: 'What is your address', img:[ '../../../assets/icon gym/address-100.png'], class: '', contents: [
  //           { label: ['address 1'], type: 'text', checked: '', placeholder: '', value: [''], name: 'address', id: '', class: 'input_text_number', img: '' },
  //           { label: ['address 2'], type: 'text', checked: '', placeholder: '', value: [''], name: 'address', id: '', class: 'input_text_number', img: '' },
  //           { label: ['address 3'], type: 'text', checked: '', placeholder: '', value: [''], name: 'address', id: '', class: 'input_text_number', img: '' }
  //         ]
  //       },
  //       {
  //         tile: 'your body index', img:[ '../../../assets/icon gym/strength-100.png'], class: '', contents: [
  //           { label: ['weight'], type: 'number', checked: '', placeholder: '', value: [], name: 'weight', id: 'weight', class: 'input_text_number', img: '' },
  //           { label: ['height'], type: 'number', checked: '', placeholder: '', value: [], name: 'height', id: 'height', class: 'input_text_number', img: '' }
  //         ]
  //       },]
  //   },

  //   {
  //     category: 'advanced', form: [
  //       {
  //         tile: 'health condition', img:[ '../../../assets/icon gym/health-100.png'], class: 'checkbox_input', contents: [
  //           { label: ['Heart-related diseaes'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
  //           { label: ['Lung disease'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
  //           { label: ['Back pain'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
  //           { label: ['diseases related to bones and joints'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
  //           { label: ['Diabetes'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
  //           { label: ['Chronic lung disease'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
  //           { label: ['Kidney disease'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
  //           { label: ['Gastrointestinal diseases:'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
  //           { label: ['Infections'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
  //           { label: ['other'], type: 'checkbox', checked: '', placeholder: '', value: [], name: 'health', id: '', class: '', img: '' },
  //         ]
  //       },
  //     ]
  //   },


  // ];
