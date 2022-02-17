import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth/auth.service';
import firebase from 'firebase/compat';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user$!: Observable<firebase.User | null>;

  constructor(private authService:AuthService, private route:Router){
    this.user$ = this.authService.user$.pipe(
      tap(()=> this.route.navigateByUrl('/profile'))
    );
  }
}
