import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  login$!: Observable<any>;

  constructor(private authService: AuthService, private route:Router){}

  loginToGoogle():void{
    this.login$ = this.authService.loginWithPopup()
    .pipe(tap(()=>this.route.navigateByUrl('/profile')));
  }

  loginToGithub():void{
    this.login$ = this.authService.loginWithRedirect()
    .pipe(tap(()=>this.route.navigateByUrl('/profile')));
  }
}
