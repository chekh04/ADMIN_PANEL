import { NgModule } from "@angular/core";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { CommonModule } from "@angular/common";
import { AdminInputModule } from "../../helpers/directives/admin-input/admin-input.module";
import { SignPagesRoutingModule } from "./sign-pages-routing.module";
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminButtonModule } from "../../helpers/directives/admin-button/admin-button.module";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CheckEmailComponent } from './check-email/check-email.component';
import { ReactiveFormsModule } from "@angular/forms";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "../../store/effects/user.effects";

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    CheckEmailComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    AdminInputModule,
    SignPagesRoutingModule,
    AdminButtonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([UserEffects])
  ]
})

export class SignPagesModule {

}
