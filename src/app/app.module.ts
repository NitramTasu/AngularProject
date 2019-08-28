import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";

import {RouterModule, Routes} from '@angular/router';

import { environment } from "../environments/environment";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/Header/Header.component";
import { UserListPage } from "./pages/UserList/UserList.page";
import { UserComponent } from "./pages/User/User.page";
import { LoginComponent } from "./pages/Login/Login.page";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LoadingComponent } from "./components/Loading/Loading.component";
import {NeedAuthGuard} from '../app/auth/auth-guard'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserListPage,
    UserComponent,
    LoginComponent,
    LoadingComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [AngularFireAuth, NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
