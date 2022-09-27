import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { CheckEmailComponent } from "./check-email/check-email.component";

const routes: Routes = [
  {
    path: "sign-up",
    component: SignUpComponent
  },
  {
    path: "sign-in",
    component: SignInComponent
  },
  {
    path: "forget-password",
    component: ForgetPasswordComponent
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent
  },
  {
    path: "check-email",
    component:CheckEmailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignPagesRoutingModule { }
