import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./Login.page.html",
  styleUrls: ["./Login.page.css"]
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  });
  constructor(public afAuth: AngularFireAuth, private router: Router) {}
  login() {
    var email = this.loginForm.value.email;
    var senha = this.loginForm.value.password;
    console.log("Login", email);
    this.afAuth.auth.signInWithEmailAndPassword(email, senha).then(() => {
      this.router.navigate(["list"]);
    });
  }
  logout() {
    this.afAuth.auth
      .signOut()
      .then(() => {
        console.log("logout com sucesso");
      })
      .catch(() => {
        console.log("Logout deu erro");
      });
  }
}
