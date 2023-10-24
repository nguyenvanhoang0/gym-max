import { Component,OnInit  } from '@angular/core';
import { PracticeTimeService } from '../../../service/practice-time/practice-time.service';
import { MyWorkoutService } from '../../../service/my_Workout/my-workout.service';
import { User , UserInterface , AddUserInformation } from '../../../service/user/user-interface';
import { UserService } from '../../../service/user/user-service.service';
import { PracticeTime , PracticeTimes } from '../../../service/practice-time/practice-time-interface';
// import { HearderUserComponent } from '../../appLayout/hearder-user/hearder-user.component'
@Component({
  selector: 'app-my-workout',
  templateUrl: './my-workout.component.html',
  styleUrls: ['./my-workout.component.css']
})
export class MyWorkoutComponent {
  userInfo: User | null = null;

  practiceTimes: PracticeTime[] = [];

  daysOfWeek: string[] = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];

  currentDate: Date = new Date();

  firstDay: Date = new Date();

  daysInMonth: number[][] = [];
  
  weeks: number[][] = [];

  combinedData: any[] = [];

  constructor(
    private practiceTimeService: PracticeTimeService,
    private myWorkoutService : MyWorkoutService,
    // private hearderUserComponent :HearderUserComponent,
    private userService: UserService,
    
    ) {
    this.practiceTimes;
  }

  ngOnInit(): void {
    this.UserInfo();
    this.calculateDaysInMonth();
  }

  // getpracticeTimes() {
  //   this.practiceTimeService.getPracticeTimes().subscribe(
  //     (response) => {
  //       // Xử lý dữ liệu sau khi nhận được từ API
  //       this.practiceTimes = response.$values; 
  //       console.log(this.practiceTimes);
  //       this.combineData();
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // }

UserInfo(){
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        this.userInfo = userInfo;
        if (this.userInfo?.id !== undefined) {
          console.log(this.userInfo?.id);
          
        this.getpracticeTimesUserById(this.userInfo.id);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  getpracticeTimesUserById(id : number) {
    this.myWorkoutService.getPracticeTimes(id).subscribe(
      (response) => {
        // Xử lý dữ liệu sau khi nhận được từ API
        this.practiceTimes = response.$values; 
        console.log(this.practiceTimes);
        this.combineData();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  calculateDaysInMonth() {
    const firstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 1);
    const lastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0);
    const firstDayOfWeek = firstDay.getDay(); // Ngày đầu tiên rơi vào tuần nào (0 là Chủ Nhật, 1 là Thứ 2, ...)
  
    let weeks: number[] = [];
    let month:  number[] = [];
  
    // Tính toán ngày của tháng trước (nếu cần)
    const prevMonthLastDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), 0);
    const prevMonthDays = prevMonthLastDay.getDate();
    for (let i = prevMonthDays - firstDayOfWeek + 1; i <= prevMonthDays; i++) {
      weeks.push(i);
    }
  
    for (let day = firstDay.getDate(); day <= lastDay.getDate(); day++) {
      weeks.push(day);  
      if (weeks.length === 7) {
        this.weeks.push(weeks);
        weeks = [];
      }
    }
  
    // Tính toán ngày của tháng tiếp theo (nếu cần)
    if (weeks.length > 0) {
      const nextMonthFirstDay = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1);
      const remainingDays = 7 - weeks.length;
      
      for (let day = nextMonthFirstDay.getDate(); day <= nextMonthFirstDay.getDate() + remainingDays - 1; day++) {
        weeks.push(day);
      }
    }
  
    this.weeks.push(weeks);
  }

  combineData() {
    for (let i = 0; i < this.practiceTimes.length; i++) {
      const daysOfWeek = this.weeks[i];
      this.combinedData.push({ practiceTime: this.practiceTimes[i], daysOfWeek });
    }
  }



}
