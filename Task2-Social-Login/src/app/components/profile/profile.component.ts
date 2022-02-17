import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  user$ = this.authService.user$;
  logout$!: Observable<any>;

  constructor(private authService:AuthService, private route:Router){}

  logout(): void{
    this.logout$ = this.authService.logout()
    .pipe(tap(()=>this.route.navigateByUrl('/login')));
  }

}

