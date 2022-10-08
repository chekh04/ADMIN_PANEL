import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../../core/services/user-service";
import { addUserInfo, invokeEffectCheckStorage, invokeEffectOnAddUserInfo } from "../actions/user.actions";
import { map, tap } from "rxjs";

@Injectable()

export class UserEffects {

  public updateUserInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeEffectOnAddUserInfo),
      tap(action => this.userService.updateUserData(action.userInfo)),
      map(() => addUserInfo({info: JSON.parse(localStorage.getItem('user'))}))
    )
  })
  public addInitialInfo$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeEffectCheckStorage),
      map(() => addUserInfo({info: JSON.parse(localStorage.getItem('user'))}))
    )
  })

  constructor(private actions$: Actions,
              private userService: UserService) {

  }
}
