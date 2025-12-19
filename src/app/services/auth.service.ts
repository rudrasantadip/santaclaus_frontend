import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response, User } from '../dao/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string= 'http://localhost:8080/auth';
  
  constructor(private http:HttpClient) 
  {

  }

  login(user:User):Observable<Response>{
    return this.http.post<Response>(`${this.baseUrl}/login`,user,{withCredentials:true});
  }

  test(){
    return this.http.get('http://localhost:8080/users/protected',
    {
      withCredentials:true,
      responseType:'text'
    }
    )
  }
}
