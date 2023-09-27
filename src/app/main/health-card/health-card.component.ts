import { Component , ViewChild, ElementRef ,OnInit } from '@angular/core';

import { FormQuestionService } from '../../../service/form-question/form-question.service';
import { InputForm , InputFormAttribute , FormQuestionResponse} from '../../../service/form-question/form-question-interface';

import { AuthService } from '../../../service/AuthService/auth.service';
import { UserInfo } from '../../../service/AuthService/auth-interface';
import { UserService } from '../../../service/user/user-service.service';

import { User , UserInterface } from '../../../service/user/user-interface';
import { AppComponent} from '../../app.component'

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
  formQuestionsById: InputForm | null = null;
  inputAttributesArray: any[] = [];
  idFormQuestion: number = 5;
  userInfo: User | null = null;

  constructor(
    private formQuestionService: FormQuestionService,
    private authService: AuthService,
    private userService: UserService,
    private appComponent: AppComponent
    ) { 
    this.formQuestions = [];
    this.inputAttributesArray = [];
  }






  @ViewChild('myInput') myInput!: ElementRef;



  ngOnInit() {
    this.getUser();
    this.getRandomAvata();
    this.loadFormQuestions();
    this.loadFormQuestionsById(this.idFormQuestion);
   
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

  loadFormQuestionsById(id: number) {
    this.formQuestionService.getFormQuestionById(this.idFormQuestion).subscribe(
      (response) => {
        // Xử lý dữ liệu sau khi nhận được từ API
        if (response && response.inputAttributes) {
          // Kiểm tra nếu response chứa inputAttributes
          this.formQuestionsById = response;
          this.inputAttributesArray = Object.values(this.formQuestionsById.inputAttributes);

          console.log(this.inputAttributesArray);
        } else {
          console.error('Không thể xác định cấu trúc dữ liệu từ API');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  assignValueToX(value: number) {
    this.idFormQuestion = value;
    this.loadFormQuestionsById(this.idFormQuestion);
  }

  nextBackFormQuestions(value: number){
    this.idFormQuestion = value;
    this.loadFormQuestionsById(this.idFormQuestion);
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
