import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cuenta } from '../../models/cuenta/cuenta.model';
import { environment } from '../../enviroments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string,password: string): Observable<Cuenta>{
    let body = {
      "email": email,
      "password": password
    }
    return this.http.post<Cuenta>(environment.url+"/auth/login",body);
  }

}
