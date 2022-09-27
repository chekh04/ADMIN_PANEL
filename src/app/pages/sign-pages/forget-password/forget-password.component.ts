import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { onlyEmail } from "../../../helpers/validators/only-email";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
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
export class ForgetPasswordComponent implements OnInit {

  public form!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      email: [null, [Validators.required, onlyEmail()]]
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {

  }
}
