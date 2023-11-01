import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { BigExercisesService } from '../../../service/big-exercises/big-exercises.service';
import { GeneralGenreService } from '../../../service/general_genre/general-genre.service';
import { BigExerciseGeneralGenreService } from '../../../service/big-exercise-general-genre/big-exercise-general-genre.service';

import { UserService } from '../../../service/user/user-service.service';
import { User } from '../../../service/user/user-interface';
import { GeneralGenreInterface } from '../../../service/general_genre/general-genre-interface';
import { BigExerciseGeneralGenreInterface } from '../../../service/big-exercise-general-genre/big-exercise-general-genre-interface';

export interface WorkoutGoal {
  name: string;
  description: string;
}

export interface categorys {
  generalGenre: string;
  categorys: string[];
  select: boolean;
}

@Component({
  selector: 'app-create-exercises',
  templateUrl: './create-exercises.component.html',
  styleUrls: ['./create-exercises.component.css']
})
export class CreateExercisesComponent {
  @ViewChild('targetInput', { static: true }) targetInput!: ElementRef<HTMLInputElement>;

  userInfo: User | null = null;
  suggestedKeywords: string[] = ['Angular', 'React', 'Vue', 'TypeScript', 'JavaScript'];
  targetInputs: string = '';
  filteredKeywords: string[] = [];
  selectedKeyword: string = '';
  allGeneralGenre:GeneralGenreInterface [] = [];
  formData: any = {
    target: '',
    category: '',
    point: 0,
    private: true,
    status: '',
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

  categoriesData: categorys[] = [
    {
      generalGenre: "Bài tập nâng tạ (Weightlifting)",
      categorys: ["Kéo đẩy (Bench Press)", "Kéo đứng (Deadlift)", "Gác chân (Squats)", "..."],
      select: false,
    },
    {
      generalGenre: "Bài tập cardio",
      categorys: ["Chạy bộ", "Đạp xe", "Bơi lội", "..."],
      select: false,
    },
    {
      generalGenre: "Bài tập chức năng (Functional Training)",
      categorys: ["CrossFit", "HIIT (High-Intensity Interval Training)", "Yoga và Pilates", "..."],
      select: false,
    },
    {
      generalGenre: "Bài tập tập trung (Isolation Exercises)",
      categorys: ["Curl tay (Bicep Curls)", "Extension cơ chân (Leg Extensions)", "..."],
      select: false,
    },
    {
      generalGenre: "Bài tập tập trung vào cơ bắp cụ thể",
      categorys: ["Nâng cằm (Pull-ups/Chin-ups)", "Nâng mông (Glute Bridges)", "..."],
      select: false,
    },
    {
      generalGenre: "Bài tập dùng tải trọng cơ thể",
      categorys: ["Lie Plank", "Push-ups", "..."],
      select: false,
    },
    {
      generalGenre: "Bài tập tăng cường linh hoạt (Flexibility Training)",
      categorys: ["Tập giãn cơ (Stretching)", "..."],
      select: false,
    },
    {
      generalGenre: "Bài tập bổ trợ (Supplementary Exercises)",
      categorys: ["Kéo dây (Cable Exercises)", "Bài tập bảo vệ cơ bắp (Prehab Exercises)", "..."],
      select: false,
    },
    {
      generalGenre: "another type",
      categorys: ["Do you want to practice another genre?. Please fill in here"],
      select: false,
    },

  ];


  constructor(
    private bigExercisesService: BigExercisesService,
    private generalGenreService: GeneralGenreService,
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
              this.router.navigate(['user/createdExercises']);
            },
            (error) => {
              console.error('Lỗi khi gửi dữ liệu lên API:', error);
            }
          );
          // console.log(this.userInfo?.id);
          // this.GetcreatedWorkoutsInterface(this.userInfo.id);
          // console.log(this.myBigExercises);
        }
      },
    )
  }

  getallGeneralGenre(){
    this.generalGenreService.getGeneralGenre().subscribe(
      (allGeneralGenre) => {
        this.allGeneralGenre = allGeneralGenre.$values;
        console.log(this.allGeneralGenre);
        
      })
  }



  filterKeywords() {
    this.filteredKeywords = this.suggestedKeywords.filter(keyword =>
      keyword.toLowerCase().includes(this.targetInputs.toLowerCase())
    );
  }

  selectKeyword(keyword: string) {
    // this.selectedKeyword = keyword;
    this.targetInput.nativeElement.focus();
    this.targetInputs = keyword;
    this.filteredKeywords = [];
  }

  toggleSelect(item: any) {
    item.select = !item.select;
    console.log(this.allGeneralGenre);

    const selectedCategories = this.categoriesData
      .filter((category) => category.select)
      .map((category) => category.generalGenre);

    this.formData.category  = selectedCategories.join(" / ");
    console.log(this.formData.category);
  }

  // ngAfterViewInit() {
  //   this.targetInput.nativeElement.value = 'Giá trị mặc định hoặc bất kì giá trị nào bạn muốn';
  // }

  resetForm() {
    this.formData = {
      target: '',
      category: '',
      point: 0,
      private: true,
      status: '',
    };
  }
}
