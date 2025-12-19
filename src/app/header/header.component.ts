import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthstateService } from '../services/authstate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

constructor(
  private router:Router,
  private authState:AuthstateService
) {
  
}
ngOnInit(): void {
  
}



redirectTo(url:string)
{
  this.router.navigate([url]);
}

isLoggedin():boolean{
  return this.authState.isLoggedIn;
}

logout(){

}

}
