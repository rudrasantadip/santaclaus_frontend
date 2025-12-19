import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/dao/user';
import { AuthService } from 'src/app/services/auth.service';
import { AuthstateService } from 'src/app/services/authstate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loading:boolean=false;

  user:User={
    username:'',
    password:'',
    role:'ROLE_USER'
  }

  constructor(
    private authService:AuthService,
    private authState:AuthstateService,
    private router:Router
  ) {
    
  }

  login(){
    if(this.user.username=='' || this.user.password==''){
      alert('Enter username and password');
      return;
    }
    this.loading=true;
    this.authService.login(this.user)
    .subscribe(res=>{
      this.loading=false;
      if(res.response=='success' && res.status==true){
        this.authState.setLoggedIn(true);
        this.router.navigate(['/product']);
      }
      else{
        this.authState.setLoggedIn(false);
      }
    })
  }

}
