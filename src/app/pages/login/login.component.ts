import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private loginService: LoginService) { }

  loginUser() {
    let emailInput = document.querySelector('.email') as HTMLInputElement;
    let passwordInput = document.querySelector('.password') as HTMLInputElement;

    let email = emailInput.value;
    let password = passwordInput.value;

    let data: LoginCommand = {
      email: email,
      password: password
    }

    this.loginService.loginUser(data).subscribe(
      (response) => {
        if (parseInt(response) === 1) {
          console.log('data 1 keldi');
        }
        else {
          console.log('data 0 keldi');
        }
      }
    )
  }
}
export interface LoginCommand {
  email: string,
  password: string
}