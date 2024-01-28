import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateUserCommand } from '../registration.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://localhost:7148/api/User/';

  createUser(data: CreateUserCommand): Observable<CreateUserCommand> {
    return this.httpClient.post<CreateUserCommand>(this.baseUrl + 'Create', data);
  }

}
