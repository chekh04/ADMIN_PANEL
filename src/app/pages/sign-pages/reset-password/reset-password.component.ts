import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { checkPasswords } from "../../../helpers/validators/confirm-password";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
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
export class ResetPasswordComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  public createFormGroup(): FormGroup {
    return this.fb.group({
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
    console.log(this.form.value)
  }
}
