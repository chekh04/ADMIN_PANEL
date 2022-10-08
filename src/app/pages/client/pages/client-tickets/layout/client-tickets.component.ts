import { Component, OnInit } from '@angular/core';
import { combineLatest, filter, map, Observable, } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { AddTicketDialogComponent } from "../../../dialogs/add-ticket-dialog/add-ticket-dialog.component";
import { Ticket } from "../../../../../core/models/ticket";
import { PageEvent } from "@angular/material/paginator";
import { Store } from "@ngrx/store";
import {
  invokeEffectOnSort,
  invokeEffectOnTogglePage,
  invokeAddTicketEffect,
  invokeEffect,
  updateStateData,
  updateState
} from "../../../../../store/actions/tickets-actions";
import { ticketsDataSelector, ticketsLengthSelector } from "../../../../../store/selectors/tickets-selectors";
import { invokeEffectCheckStorage } from "../../../../../store/actions/user.actions";


@Component({
  selector: 'app-client-tickets',
  templateUrl: './client-tickets.component.html',
  styleUrls: ['./client-tickets.component.scss']
})
export class ClientTicketsComponent implements OnInit {

  public ticketsSource$: Observable<Ticket[]>;
  public ticketsListLength$: Observable<number>;

  constructor(public dialog: MatDialog,
              private store: Store) {
    this.store.dispatch(invokeEffectCheckStorage());
    this.store.dispatch(invokeEffect())
    this.ticketsSource$ = this.store.select(ticketsDataSelector);
    this.ticketsListLength$ = this.store.select(ticketsLengthSelector);
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['details', 'name', 'date', 'priority'];

  public openModal(): void {
    this.dialog
      .open(AddTicketDialogComponent, {width: '380px', height: '660px'})
      .afterClosed()
      .pipe(
        filter(el => !!el),
        map(el => this.store.dispatch(invokeAddTicketEffect({data: el})))
      ).subscribe()
  }

  public onToggle(e: PageEvent): void {
    this.store.dispatch(invokeEffectOnTogglePage({index: e.pageIndex, size: e.pageSize}));

  }

  public sortData(): void {
    this.store.dispatch(invokeEffectOnSort());
  }
}
