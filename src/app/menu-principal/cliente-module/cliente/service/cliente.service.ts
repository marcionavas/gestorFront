import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

import { environment as env } from '../../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    private readonly apiPath: string = 'cliente';
   
    constructor(private http: HttpClient) {
    }

    salvarCliente(cli): Observable<any> {
        let body = JSON.stringify(cli);
        console.log(body);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + sessionStorage['token']
            })
        };

        return this.http.post(
            env.apiUrl + this.apiPath,
            body,
            httpOptions
        )
    }
}