import { Component, Input, OnChanges, SimpleChanges ,Output ,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { IDayDetails } from '../../../service/workout-schedule/day-details-interface';
import { WorkoutScheduleService } from '../../../service/workout-schedule/workout-schedule.service';
import { MyWorkoutService } from '../../../service/my_Workout/my-workout.service';
import { UserService } from '../../../service/user/user-service.service';

import { IUser } from '../../../service/user/user-interface';
import { IPracticeTime } from '../../../service/practice-time/practice-time-interface';

@Component({
  selector: 'app-details-date',
  templateUrl: './details-date.component.html',
  styleUrls: ['./details-date.component.css']
})
export class DetailsDateComponent {
  @Output() viewingDate = new EventEmitter<IDayDetails>();

  @Input() selectedDate!: IDayDetails;

  userInfo: IUser | null = null;
  practiceTimes: IPracticeTime[] = [];
  currentDate: Date = new Date();
  currentYear: number;
  currentMonth: number;

  constructor(
    private router: Router,
    private myWorkoutService: MyWorkoutService,
    private userService: UserService,
    private workoutScheduleService: WorkoutScheduleService,
  ) {
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth() + 1;
  }

  ngOnInit(): void {
    this.UserInfo()
    this.selectedDate = this.workoutScheduleService.getTodayDetails();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('selectedDate changed:', this.selectedDate);
    if (this.selectedDate) {
      this.clickDay(this.selectedDate)
      console.log("heheh");

    }

  }

  UserInfo() {
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        this.userInfo = userInfo;
        this.clickDay(this.selectedDate)

      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  clickDay(day: IDayDetails) {

    this.practiceTimes = [];

    console.log(this.userInfo );

    if (this.userInfo) {
      console.log(2);

      const id = this.userInfo.id;
      if (id) {
        const selectedDate = new Date(day.year + `-` + day.month + `-` + day.day);

        const formattedDate = new Date(this.formatDate(selectedDate));
        this.myWorkoutService.getPracticeTimesByTimeStart(id, formattedDate).subscribe(
          (response) => {
            this.practiceTimes = response.$values;
            console.log(this.practiceTimes);
            // this.day = day
            // console.log(this.day);
          },
          (error) => {
            console.error(error);
          }
        );
      }
    }
  }

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  updateCurrentDayAndMonthAndYear(offset: number) {
    let day = this.selectedDate.day + offset;

    if (day === 0 || day === this.getDaysInMonth(this.currentYear, this.currentMonth - 1) + 1) {
      const newMonth = day === 0 ? this.currentMonth - 1 : this.currentMonth + 1;
      const newYear = newMonth === 0 ? this.currentYear - 1 : newMonth === 13 ? this.currentYear + 1 : this.currentYear;

      this.currentMonth = newMonth === 0 ? 12 : newMonth === 13 ? 1 : newMonth;
      this.currentYear = newYear;

      day = day === 0 ? this.getDaysInMonth(this.currentYear, this.currentMonth) : 1;
      // this.day = day;
    } else {
      this.currentMonth = this.currentMonth;
    }

    this.selectedDate = {
      day: day,
      month: this.currentMonth,
      year: this.currentYear,
      status
    };

    // this.calculateDaysInMonth(); 
    // console.log(this.selectedDate);
    this.viewingDate.emit(this.selectedDate);

    this.clickDay(this.selectedDate);
  }

  getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }

  navigateToExerciseDetails(exerciseId: number) {
    // Navigate to TargetDetails with the specified exercise ID
    this.router.navigate(['/user/exerciseDetail', exerciseId]);
  }

}
