import { Component, ViewChild, ElementRef, AfterViewInit ,HostListener  } from '@angular/core';
import { Router } from '@angular/router';

import { BigExercisesService } from '../../../service/big-exercises/big-exercises.service';
import { GeneralGenreService } from '../../../service/general_genre/general-genre.service';
import { BigExerciseGeneralGenreService } from '../../../service/big-exercise-general-genre/big-exercise-general-genre.service';

import { UserService } from '../../../service/user/user-service.service';
import { User } from '../../../service/user/user-interface';
import { GeneralGenreInterface , createGeneralGenre} from '../../../service/general_genre/general-genre-interface';
import { BigExerciseGeneralGenreInterface } from '../../../service/big-exercise-general-genre/big-exercise-general-genre-interface';

export interface WorkoutGoal {
  name: string;
  description: string;
}


@Component({
  selector: 'app-create-target',
  templateUrl: './create-target.component.html',
  styleUrls: ['./create-target.component.css']
})
export class CreateTargetComponent {
  @ViewChild('targetInput', { static: true }) targetInput!: ElementRef<HTMLInputElement>;

  userInfo: User | null = null;
  formCreatecategory: boolean = false
  // suggestedKeywords: string[] = ['Angular', 'React', 'Vue', 'TypeScript', 'JavaScript'];
  targetInputs: string = '';
  // filteredKeywords: string[] = [];
  // selectedKeyword: string = '';
  allGeneralGenre:GeneralGenreInterface [] = [];
  formData: any = {
    target: '',
    point: 0,
    private: true,
    status: '',
  };

  formDataCategory : createGeneralGenre = {
    name: '',
    description: '',
  };
  

  // Tạo mảng chứa các mục tiêu tập luyện
  goals: WorkoutGoal[] = [
    {
      name: 'Xây dựng cơ bắp (Muscle Building)',
      description: 'Nhiều người muốn tăng cơ bắp và sức mạnh bằng cách thực hiện các bài tập nâng tạ và tăng calo.'
    },
    {
      name: 'Giảm cân (Weight Loss)',
      description: 'Một mục tiêu phổ biến là đốt chất béo và giảm cân. Điều này thường liên quan đến việc kết hợp cardio và tập nâng tạ.'
    },
    {
      name: 'Tăng sức bền (Endurance)',
      description: 'Một số người muốn cải thiện khả năng sức bền và chạy xa hơn hoặc tập thể dục trong thời gian dài hơn.'
    },
    {
      name: 'Cải thiện sức khỏe tim mạch',
      description: 'Tập luyện để cải thiện sức khỏe tim mạch, giảm nguy cơ bệnh tim mạch và tăng cường tuổi thọ.'
    },
    {
      name: 'Giảm căng thẳng và cải thiện tâm trạng',
      description: 'Tập luyện có thể giúp giảm căng thẳng và cải thiện tâm trạng thông qua việc sản xuất endorphin, các hormon cảm giác tích cực.'
    },
    {
      name: 'Cải thiện linh hoạt và cân bằng',
      description: 'Mục tiêu này tập trung vào tăng cường linh hoạt và cân bằng của cơ thể, thường thông qua yoga hoặc Pilates.'
    },
    {
      name: 'Phục hồi sau chấn thương hoặc phẫu thuật',
      description: 'Một số người tập luyện để phục hồi sau chấn thương hoặc phẫu thuật, và để tăng sức mạnh và linh hoạt sau đó.'
    },
    {
      name: 'Tham gia các cuộc thi thể hình hoặc thể thao',
      description: 'Mục tiêu của một số người là chuẩn bị cho cuộc thi thể hình hoặc thể thao như cử tạ, đấu vật, hoặc bơi lội.'
    },
    {
      name: 'Thư giãn và thỏa mãn',
      description: 'Cuối cùng, một số người tập luyện chỉ đơn giản để thư giãn, giải tỏa căng thẳng, và thấy thoải mái trong cơ thể.'
    }
  ];

  


  constructor(
    private bigExercisesService: BigExercisesService,
    private generalGenreService: GeneralGenreService,
    private bigExerciseGeneralGenreService: BigExerciseGeneralGenreService,
    private userService: UserService,
    private router: Router
    // private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getallGeneralGenre();
    // this.calculateDaysInMonth();
  }

  onSubmit() {
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        this.userInfo = userInfo;
        if (this.userInfo?.id !== undefined) {
          const userId = this.userInfo.id;
          this.bigExercisesService.createBigExercise({ ...this.formData, userId }).subscribe(
            (response) => {
              console.log('Dữ liệu đã được gửi lên API thành công:', response);
              this.CreateBigExerciseGeneralGenre(response.id)
              // this.router.navigate(['user/createdExercises']);
            },
            (error) => {
              console.error('Lỗi khi gửi dữ liệu lên API:', error);
            }
          );
        }
      },
    )
  }

  CreateBigExerciseGeneralGenre(createdBigExerciseid : number ){
    // 
    const selectedCategories = this.allGeneralGenre.filter(category => category.select);
    selectedCategories.forEach(category => {
      const formData: BigExerciseGeneralGenreInterface = {
        bigExerciseId: createdBigExerciseid,
        generalGenreId: category.id,
      };
      console.log(formData);
      
      this.bigExerciseGeneralGenreService.createBigExerciseGeneralGenre(formData ).subscribe(
        (response) => {
          console.log('Dữ liệu đã được gửi lên API thành công:', response);
        },
        (error) => {
          console.error('Lỗi khi gửi dữ liệu lên API:', error);
        }
      )
    })
  }

  onSubmitCategory(){
    this.generalGenreService.createGeneralGenre({ ...this.formDataCategory }).subscribe(
      (response) => {
        console.log('Dữ liệu đã được gửi lên API thành công:', response);
        this.getallGeneralGenre();
      },)
  }

  getallGeneralGenre(){
    this.generalGenreService.getGeneralGenre().subscribe(
      (allGeneralGenre) => {
        this.allGeneralGenre = allGeneralGenre.$values;
        console.log(this.allGeneralGenre);
        
      })
  }

  selectKeyword(keyword: string) {
    this.targetInput.nativeElement.focus();
    this.formData.target = keyword;

  }

  toggleSelect(item: any) {
    item.select = !item.select;
    console.log(this.formData.category);
  }

  toggleFormCreatecategory() {
    this.formCreatecategory = !this.formCreatecategory;
    console.log(this.formCreatecategory );
  }

  onChildClick(event: Event) {
    // Ngăn chặn sự kiện lan truyền lên thẻ cha
    event.stopPropagation();
  }


  resetForm() {
    this.formData = {
      target: '',
      // category: '',
      point: 0,
      private: true,
      status: '',
    };
  }
}
