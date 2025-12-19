import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthstateService {
  constructor() { }

  private loggedIn$ = new BehaviorSubject<boolean>(false);

  isLoggedIn$ = this.loggedIn$.asObservable();

  setLoggedIn(value:boolean){
    this.loggedIn$.next(value);
  }

  get isLoggedIn():boolean{
    return this.loggedIn$.value;
  }

}
