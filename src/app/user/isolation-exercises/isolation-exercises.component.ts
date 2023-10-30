import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


import { IsolationExercisesService } from '../../../service/isolation-exercises/isolation-exercises.service';
import {IsolationExercisesInterface } from '../../../service/isolation-exercises/isolation-exercises-interface';
import { User, UserInterface, AddUserInformation } from '../../../service/user/user-interface';
import { UserService } from '../../../service/user/user-service.service';

@Component({
  selector: 'app-isolation-exercises',
  templateUrl: './isolation-exercises.component.html',
  styleUrls: ['./isolation-exercises.component.css']
})

export class IsolationExercisesComponent {
  userInfo: User | null = null;
  formData: IsolationExercisesInterface = {
    content: '',
    quantity: 0,
    time: 0,
    category: '',
    point: 0,
    userId: 0,
    evaluate: 0
  };
  constructor(
    private isolationExercisesService: IsolationExercisesService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  onSubmit() {
    this.userService.getUserInfo().subscribe(
      (userInfo) => {
        this.userInfo = userInfo;
        if (this.userInfo?.id !== undefined) {
          const userId = this.userInfo.id;

          this.isolationExercisesService.createExercise({...this.formData ,userId} ).subscribe(
            (response) => {
              console.log('Dữ liệu đã được gửi thành công:', response);
              // Thực hiện các tác vụ tiếp theo sau khi gửi thành công
            },
            (error) => {
              console.error('Lỗi khi gửi dữ liệu:', error);
              // Xử lý lỗi hoặc hiển thị thông báo lỗi cho người dùng
            }
          );
        }})
  }
}
