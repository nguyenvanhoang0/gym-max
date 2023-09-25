import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Remove FormsModule import
import { UserService } from '../../../service/user/user-service.service';
import { AuthService } from '../../../service/AuthService/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService : AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      this.authService.login(email, password).subscribe(
        (response) => {
          // Handle successful login
          console.log('Logged in:', response);
          this.authService.setToken(response.token);
          this.router.navigate(['/main/home']);
        },
        (error) => {
          // Handle login error
          console.error('Login error:', error);
        }
      );
    }
  }

  

  register() {
    if (this.registerForm.valid) {
      const user = this.registerForm.value;

      this.userService.registerUser(user).subscribe(
        (response) => {
          // Handle successful registration
          console.log('Registered user:', response);
          this.login();
        },
        (error) => {
          // Handle registration error
          console.error('Registration error:', error);
        }
      );
      
    }
  }
}
