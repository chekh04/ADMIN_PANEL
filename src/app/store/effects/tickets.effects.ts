import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  invokeAddTicketEffect,
  invokeEffect,
  invokeEffectOnSort,
  invokeEffectOnTogglePage,
  updateState, updateStateData,
} from "../actions/tickets-actions";
import { combineLatest, map, mergeMap, tap } from "rxjs";
import { TicketsService } from "../../core/services/tickets-service";

@Injectable()
export class TicketsEffects {
  updateInitialState$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(invokeEffect),
        tap(() => console.log('1 effect works')),
        tap(() => this.ticketService.updateDataSource()),
        mergeMap(() => combineLatest(this.ticketService.ticketsSource$, this.ticketService.ticketsLength$)
          .pipe(
            // tap(res => console.log(res)),
            map(res => updateState({data: res[0], length: res[1]}))
          )),
      )
  });
  updateStateOnToggle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeEffectOnTogglePage),
      tap(() => console.log('2 effect works')),
      tap((action) => this.ticketService.updateDataSource(action.index, action.size)),
      mergeMap(() => this.ticketService.ticketsSource$
        .pipe(
          map(res => updateStateData({data: res}))
        ))
    );
  });
  updateStateOnSort$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeEffectOnSort),
      tap(() => this.ticketService.sortDataSource()),
      mergeMap(() => this.ticketService.ticketsSource$
        .pipe(
          map(res => updateStateData({data: res}))
        ))
    )
  });
  updateStateOnTicketAdd$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(invokeAddTicketEffect),
      tap(action => this.ticketService.addTicket(action.data)),
      mergeMap(() => combineLatest(this.ticketService.ticketsSource$, this.ticketService.ticketsLength$)
        .pipe(
          // tap(res => console.log(res)),
          map(res => updateState({data: res[0], length: res[1]}))
        ))
    )
  })

  constructor(private actions$: Actions,
              private ticketService: TicketsService) {

  }
}
