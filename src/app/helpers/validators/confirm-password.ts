import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function checkPasswords(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    let pass = group.get('password').value;
    let confirmPass = group.get('confirmPassword').value;

    return pass === confirmPass ? null : {notSame: true};
  };
}
