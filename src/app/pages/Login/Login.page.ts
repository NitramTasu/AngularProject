import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/Login.services';

@Component({
  selector: 'app-root',
  templateUrl: './Login.page.html',
  styleUrls: ['./Login.page.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  constructor(public afAuth: AngularFireAuth, private router: Router, private authService: AuthService) {}
  login() {
    let email = this.loginForm.value.email;
    let senha = this.loginForm.value.password;
    this.afAuth.auth.signInWithEmailAndPassword(email, senha).then(() => {
      this.router.navigate(['list']);
    });
  }
  logout() {
    this.authService.logout();

  }
}
