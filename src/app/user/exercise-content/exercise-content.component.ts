import { Component } from '@angular/core';
import { MyWorkoutService ,} from '../../../service/my_Workout/my-workout.service';
import { MyBigExerciseInterface , MyWorkoutData , MonthlyData} from '../../../service/my_Workout/my-workout-interface';
import { User, UserInterface, AddUserInformation } from '../../../service/user/user-interface';
import { UserService } from '../../../service/user/user-service.service';
import { PracticeTime, PracticeTimes } from '../../../service/practice-time/practice-time-interface';
@Component({
  selector: 'app-exercise-content',
  templateUrl: './exercise-content.component.html',
  styleUrls: ['./exercise-content.component.css']
})
export class ExerciseContentComponent {
  userInfo: User | null = null;
  myBigExercises : MyWorkoutData[] = [];
  bigExercisesMonthlyData: { [key: string]: MonthlyData[] } = {};
  // monthlyDataList: bigExercisesMonthlyData[] = [];
  constructor(
    // private practiceTimeService: PracticeTimeService,
    private myWorkoutService: MyWorkoutService,
    // private hearderUserComponent :HearderUserComponent,
    private userService: UserService,
  ) 
  {
    this.myBigExercises;
  }
  ngOnInit(): void {
    this.UserInfo();
    // this.calculateDaysInMonth();
  }

  UserInfo() {
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        this.userInfo = userInfo;
        if (this.userInfo?.id !== undefined) {
          // console.log(this.userInfo?.id);
          this.GetBigExerciseInMyWorkoutsByUserId(this.userInfo.id);
          // console.log(this.practiceTimes);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  GetBigExerciseInMyWorkoutsByUserId(id: number) {
    this.myWorkoutService.GetBigExerciseInMyWorkoutsByUserId(id).subscribe(
      (response) => {
        // Xử lý dữ liệu sau khi nhận được từ API
        this.myBigExercises = response.$values;
        console.log(this.myBigExercises);
        
        this.myBigExercises.forEach((item) => {
          const timeStart = new Date(item.timeStart);
          const year = timeStart.getFullYear();
          const month = timeStart.getMonth() + 1; // Lấy tháng từ 0-11, cần cộng thêm 1
          const originalDate = "2023-10";
          const parts = originalDate.split('-'); // Tách chuỗi theo dấu '-'
          const modifiedDate = `${parts[1]}-${parts[0]}`;
          // Tạo key cho tháng (ví dụ: "2023-10")
          const monthKey = `${year}-${month.toString().padStart(2, '0')}`;
        
          // Kiểm tra xem key đã tồn tại chưa
          if (!this.bigExercisesMonthlyData[monthKey]) {
            this.bigExercisesMonthlyData[monthKey] = [];
          }
        
          // Tạo đối tượng dữ liệu mới và push nó vào mảng của tháng tương ứng
          const newData: MonthlyData = {
            id: item.id,
            timeStart: modifiedDate,
            timeEnd: item.timeStart,
            bigExercise: {
              id: item.bigExercise.id,
              target: item.bigExercise.target,
              category: item.bigExercise.category,
              point: item.bigExercise.point,
              userId: item.bigExercise.userId,
              private: item.bigExercise.private,
              status: item.bigExercise.status,
            },
          };
        
          this.bigExercisesMonthlyData[monthKey].push(newData);
        });
        console.log(this.bigExercisesMonthlyData);
        
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
