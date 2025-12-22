import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response, User } from '../dao/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl:string= 'http://localhost:8080/auth';
  private sessionUrl:string='http://localhost:8080/users'
  
  constructor(private http:HttpClient) 
  {

  }

  login(user:User):Observable<Response>{
    return this.http.post<Response>(`${this.baseUrl}/login`,user,{withCredentials:true});
  }

  logout():Observable<any>{
    return this.http.post(`${this.sessionUrl}/logout`,{},{withCredentials:true})
  }

  restoreSession():Observable<Response>{
    return this.http.get<Response>(`${this.sessionUrl}/restore/session`,{withCredentials:true});
  }

}
