import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as env } from '../../../../environments/environment';

import { Login } from '../../login/models/login.model'


@Injectable({
  providedIn: 'root' //LoginModule
})
export class LoginService {

  private readonly apiPath: string = 'login';

  constructor(private http: HttpClient) { }

  login(login: Login): Observable<any> {

    console.log('Requisição para: ' + env.apiUrl + this.apiPath);

    //return this.http.post(env.apiUrl + this.apiPath, login);


    const body = JSON.stringify(login);

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }


    return this.http.post(
      env.apiUrl + this.apiPath,
      body,
      { observe: 'response', responseType: 'text' });



    //  return this.http.post(env.apiUrl + this.apiPath, body);

  }

}
