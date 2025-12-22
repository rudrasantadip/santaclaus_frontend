import { Component, OnInit } from '@angular/core';
import { AuthstateService } from './services/authstate.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private sessionUrl:string='http://localhost:8080/users'
  
  constructor(
    private authState:AuthstateService,
    private authService:AuthService,
  ){

  }

  ngOnInit(): void {
   this.authService.restoreSession()
   .subscribe({
    next:()=>this.authState.setLoggedIn(true),
    error:()=>this.authState.setLoggedIn(false)
   })

   
  }
  title = 'santaclaus';
}
