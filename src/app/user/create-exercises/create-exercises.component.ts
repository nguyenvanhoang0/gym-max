import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BigExercisesService } from '../../../service/big-exercises/big-exercises.service';

import { User } from '../../../service/user/user-interface';
import { UserService } from '../../../service/user/user-service.service';


export interface WorkoutGoal {
  name: string;
  description: string;
}

@Component({
  selector: 'app-create-exercises',
  templateUrl: './create-exercises.component.html',
  styleUrls: ['./create-exercises.component.css']
})
export class CreateExercisesComponent {
  userInfo: User | null = null;
  suggestedKeywords: string[] = ['Angular', 'React', 'Vue', 'TypeScript', 'JavaScript'];
  targetInput: string = '';
  filteredKeywords: string[] = [];
  selectedKeyword: string = '';

  formData: any = {
    target: '',
    category: '',
    point: 0,
    private: true,
    status: '',
  };

  // Tạo mảng chứa các mục tiêu tập luyện
  goals: WorkoutGoal[] =[
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
    private userService: UserService,
    private router: Router
    // private route: ActivatedRoute
  ) { }

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
    // Lấy userId từ service xác thực

    // Gửi dữ liệu lên API bao gồm userId

  }

  filterKeywords() {
    this.filteredKeywords = this.suggestedKeywords.filter(keyword =>
      keyword.toLowerCase().includes(this.targetInput.toLowerCase())
    );
  }

  selectKeyword(keyword: string) {
    // this.selectedKeyword = keyword;
    this.targetInput = keyword;
    this.filteredKeywords = [];
  }

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
