import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { animate, style, transition, trigger } from "@angular/animations";
import { onlyEmail } from "../../../helpers/validators/only-email";
import { UserService } from "../../../core/services/user-service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
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
export class SignInComponent implements OnInit {
  public form!: FormGroup;

  constructor(private fb: FormBuilder,
              private userService: UserService) {
    this.form = this.createGroup();
  }

  ngOnInit(): void {

  }

  public createGroup(): FormGroup {
    return this.fb.group({
      email: [null, [Validators.required, onlyEmail()]],
      password: [null, Validators.required],
    })
  }
  public changePasswordInputType(el: HTMLInputElement): void {
    el.type === "password" ? el.type = 'text' : el.type = "password"
  }

  public submitForm(): void {
    console.log(this.form.value)
  }
}
