import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCommand } from '../login.component';
import { Observable } from 'rxjs';
import internal from 'stream';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private baseUrl = 'https://localhost:7148/api/User/';

  loginUser(data: LoginCommand): Observable<any> {
    return this.httpClient.post<LoginCommand>(this.baseUrl + 'Login', data);
  }
}