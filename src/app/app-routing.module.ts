import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { UserListPage } from "./pages/UserList/UserList.page";
import { UserComponent } from "./pages/User/User.page";
import { LoginComponent } from "./pages/Login/Login.page";
import {NeedAuthGuard} from '../app/auth/auth-guard'

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: "list", component: UserListPage, canActivate: [NeedAuthGuard] },
  { path: "user/:id", component: UserComponent, canActivate: [NeedAuthGuard] },
  { path: "user", component: UserComponent,canActivate: [NeedAuthGuard], pathMatch: 'full' },
  { path: "**", component: LoginComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
