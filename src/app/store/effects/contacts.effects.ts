import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import {
  invokeEffectOnContactAdd,
  invokeEffectOnInit,
  invokeEffectOnToggle,
  updateSource,
  updateSourceLength
} from "../actions/contacts.actions";
import { combineLatest, map, mergeMap, tap } from "rxjs";
import { ContactsService } from "../../core/services/contacts-service";

@Injectable()
export class ContactsEffects {
  public updateAllState$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeEffectOnInit),
      tap(() => this.contactsService.updateDataSource()),
      mergeMap(() =>
        combineLatest(this.contactsService.contactsSource$, this.contactsService.contactsLength$)
          .pipe(
            mergeMap(res => [updateSource({data: res[0]}), updateSourceLength({length: res[1]})])
          )
      )
    )
  })
  public updateSource$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeEffectOnToggle),
      tap(action => this.contactsService.updateDataSource(action.index, action.size)),
      mergeMap(() =>
        this.contactsService.contactsSource$.pipe(
          map(res => updateSource({data: res}))
        )
      )
    )
  })
  public addContact$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeEffectOnContactAdd),
      tap(action => this.contactsService.addContact(action.data)),
      mergeMap(() =>
        combineLatest(this.contactsService.contactsSource$, this.contactsService.contactsLength$)
          .pipe(
            mergeMap(res => [updateSource({data: res[0]}), updateSourceLength({length: res[1]})])
          )
      )
    )
  })

  constructor(private actions$: Actions,
              private contactsService: ContactsService) {
  }
}
