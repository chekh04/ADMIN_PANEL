import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { animate, style, transition, trigger } from "@angular/animations";
import { onlyEmail } from "../../../helpers/validators/only-email";
import { onlyLatin } from "../../../helpers/validators/only-latin";
import { checkPasswords } from "../../../helpers/validators/confirm-password";
import { UserService } from "../../../core/services/user-service";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  animations: [
    trigger("fadeInOut", [
      transition(":enter", [
        // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(500, style({opacity: 1})),
      ]),
      transition(":leave", [
        // :leave is alias to '* => void'
        animate(500, style({opacity: 0})),
      ]),
    ]),
  ],
})
export class SignUpComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService,
              private router: Router) {
    this.form = this.createGroup();
  }

  ngOnInit(): void {
  }

  private createGroup(): FormGroup {
    return this.fb.group({
      email: [null, [Validators.required, onlyEmail()]],
      name: [null, [Validators.required, onlyLatin()]],
      surname: [null, [Validators.required, onlyLatin()]],
      passwords: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, {validators: checkPasswords()})
    })
  }

  public changePasswordInputType(el: HTMLInputElement): void {
    el.type === "password" ? el.type = 'text' : el.type = "password"
  }

  public submitForm(): void {
    if(this.form.status === "INVALID") {
      return;
    }
    this.userService.updateUserData(this.form.value);
    this.router.navigate(['/'])
  }
}
