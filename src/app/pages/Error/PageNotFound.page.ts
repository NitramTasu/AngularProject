import { Component } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "../../services/Login.services"

@Component({
  selector: "app-root",
  templateUrl: "./PageNotFound.page.html",
  styleUrls: ["./PageNotFound.page.css"]
})
export class PageNotFoundComponent {
  
}
