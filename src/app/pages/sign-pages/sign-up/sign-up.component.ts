import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { animate, style, transition, trigger } from "@angular/animations";
import { onlyEmail } from "../../../helpers/validators/only-email";
import { onlyLatin } from "../../../helpers/validators/only-latin";
import { checkPasswords } from "../../../helpers/validators/confirm-password";
import { UserService } from "../../../core/services/user-service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { invokeEffectCheckStorage, invokeEffectOnAddUserInfo } from "../../../store/actions/user.actions";
import { tap } from "rxjs";

export interface UserInfo {
  email: string,
  name: string,
  surname: string,
  passwords: {
    password: string,
    confirmPassword: string
  }
}


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
  public formState: any;
  public firstStepIsFilled: boolean = false;
  public nextStepIsDisabled: boolean = true;

  constructor(private fb: FormBuilder,
              private store: Store,
              private router: Router) {
    this.form = this.createGroup();
    this.formState = this.form.controls;
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      let validArr = [];
      for(let key in this.formState) {
        this.formState[key].valid ? validArr.push(this.formState[key]) : null;
      }
      validArr.length === 3 ? this.nextStepIsDisabled = false : null
    })
  }

  private createGroup(): FormGroup {
    return this.fb.group({
      email: [null, [Validators.required, onlyEmail()]],
      name: [null, [Validators.required, onlyLatin()]],
      surname: [null, [Validators.required, onlyLatin()]],
      // passwords: this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      advantages: this.fb.array([])
      // }, {validators: checkPasswords()})
    })
  }

  public changePasswordInputType(el: HTMLInputElement): void {
    el.type === "password" ? el.type = 'text' : el.type = "password"
  }

  public submitForm(value: UserInfo): void {
    if (this.form.status === "INVALID") {
      return;
    }
    this.store.dispatch(invokeEffectOnAddUserInfo({userInfo: value}));
    this.router.navigate(['/'])
  }

  public checkForControlsFilled(): void {
    this.firstStepIsFilled = true;
  }

  public addAdvantages(): void {
    const control = this.fb.control('', [onlyLatin()]);
    (this.form.get('advantages') as FormArray).push(control)
  }
}
