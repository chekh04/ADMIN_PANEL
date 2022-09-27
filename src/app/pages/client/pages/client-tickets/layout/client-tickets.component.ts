import { Component, OnInit } from '@angular/core';
import { filter, Observable, } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { AddTicketDialogComponent } from "../../../dialogs/add-ticket-dialog/add-ticket-dialog.component";
import { Ticket } from "../../../../../core/models/ticket";
import { PageEvent } from "@angular/material/paginator";
import { TicketsService } from "../../../../../core/services/tickets-service";

@Component({
  selector: 'app-client-tickets',
  templateUrl: './client-tickets.component.html',
  styleUrls: ['./client-tickets.component.scss']
})
export class ClientTicketsComponent implements OnInit {

  public dataSource: Observable<Ticket[]> = this.ticketsService.ticketsSource$;
  public totalTicketsLength$: Observable<number> = this.ticketsService.ticketsLength$;

  constructor(public dialog: MatDialog,
              private ticketsService: TicketsService) {
  }

  ngOnInit(): void {
    this.ticketsService.updateDataSource(0);
  }

  displayedColumns: string[] = ['details', 'name', 'date', 'priority'];


  public openModal(): void {
    this.dialog
      .open(AddTicketDialogComponent, {width: '380px', height: '660px'})
      .afterClosed()
      .pipe(filter(el => !!el))
      .subscribe(el => {
        // console.log(el)
      this.ticketsService.addTicket(el);
    })
  }

  public onToggle(e: PageEvent): void {
    this.ticketsService.updateDataSource(e.pageIndex, e.pageSize)
  }
  public sortData(): void {
    this.ticketsService.sortDataSource();
  }
}
