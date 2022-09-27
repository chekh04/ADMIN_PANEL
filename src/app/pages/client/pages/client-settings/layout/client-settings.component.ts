import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../../../core/services/user-service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { onlyLatin } from "../../../../../helpers/validators/only-latin";
import { onlyEmail } from "../../../../../helpers/validators/only-email";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-client-settings',
  templateUrl: './client-settings.component.html',
  styleUrls: ['./client-settings.component.scss'],
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
export class ClientSettingsComponent implements OnInit {

  public form: FormGroup;

  constructor(private userService: UserService,
              private fb: FormBuilder) {
    this.form = this.getFormGroup();
    this.patchValueToForm();
  }

  ngOnInit(): void {
  }

  public onSave(): void {
    console.log(this.form.value)
  }

  private getFormGroup(): FormGroup {
    return this.fb.group({
      firstName: [null, [onlyLatin()]],
      lastName: [null, [onlyLatin()]],
      email: [null, [onlyEmail()]]
    })
  }
  private patchValueToForm(): void {
   if(localStorage.getItem('user')) {
     // @ts-ignore
     const body = JSON.parse(localStorage.getItem('user'));
     this.form.patchValue({
       firstName: body.name,
       lastName: body.surname,
       email: body.email
     })
   }
  }

}
