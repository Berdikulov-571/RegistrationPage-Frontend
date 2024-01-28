import { Component } from '@angular/core';
import { RegistrationService } from './services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  constructor(private userService: RegistrationService) { }

  CreateUser() {
    let firstNameInput = document.querySelector('.firstName') as HTMLInputElement;
    let lastNameInput = document.querySelector('.lastName') as HTMLInputElement;
    let emailInput = document.querySelector('.email') as HTMLInputElement;
    let phoneNumberInput = document.querySelector('.phoneNumber') as HTMLInputElement;
    let passwordInput = document.querySelector('.password') as HTMLInputElement;
    let retryPasswordInput = document.querySelector('.retryPassword') as HTMLInputElement;

    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let email = emailInput.value;
    let phoneNumber = phoneNumberInput.value;
    let password = passwordInput.value;
    let retryPassword = retryPasswordInput.value;

    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phoneNumber);
    console.log(password);
    console.log(retryPassword);

    let user: CreateUserCommand = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      password: password
    }

    if (password === retryPassword) {
      firstNameInput.innerText = '';
      lastNameInput.innerText = '';
      emailInput.innerText = '';
      phoneNumberInput.innerText = '';
      passwordInput.innerText = '';
      retryPasswordInput.innerText = '';

      this.userService.createUser(user).subscribe(
        (response) => alert("User Created")
      )
    }
  }
}

export interface CreateUserCommand {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  password: string
}