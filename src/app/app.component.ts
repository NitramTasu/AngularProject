import { Component } from '@angular/core';
import { AuthService } from "./services/Login.services"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-project';

  constructor (private authService: AuthService){

  }

  logout() {
    this.authService.logout()
  }

  public isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log('user', user)
    return user !== null;
  }
}
