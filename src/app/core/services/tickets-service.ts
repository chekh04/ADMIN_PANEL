import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, ReplaySubject } from "rxjs";
import { Ticket } from "../models/ticket";
import { AddTicketData } from "../../pages/client/dialogs/add-ticket-dialog/add-ticket-dialog.component";

let ELEMENT_DATA: Ticket[] = [
  {
    image: './assets/images/tickets/img.png',
    message: 'Contact Email not Linked',
    userName: 'Tom Cruise',
    date: "2022-08-08T12:05:07.268Z",
    priority: "high"
  },
  {
    image: './assets/images/tickets/img.png',
    message: 'Contact Emailfd not Linked',
    userName: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    priority: "low"
  },
  {
    image: './assets/images/tickets/img.png',
    message: 'Contact dfdfdreEmail not Linked',
    userName: 'Tomdd Cruise',
    date: "2022-08-08T12:05:07.268Z",
    priority: "normal"
  },
  {
    image: './assets/images/tickets/img.png',
    message: 'Contact Emafil not Linked',
    userName: 'Tom Cruise',
    date: "2022-08-08T12:05:07.268Z",
    priority: "high"
  },
  {
    image: './assets/images/tickets/img.png',
    message: 'Contact Email not Lfggginked',
    userName: 'Tom Crdfdfuise',
    date: "2022-08-08T12:05:07.268Z",
    priority: "high"
  },
  {
    image: './assets/images/tickets/img.png',
    message: 'Contactfgfdfdfs Email not Linked',
    userName: 'Tom Cruise',
    date: "2022-08-08T12:05:07.268Z",
    priority: "low"
  },
  {
    image: './assets/images/tickets/img.png',
    message: 'Contact Email not Linked',
    userName: 'Tom Cruise',
    date: "2022-08-08T12:05:07.268Z",
    priority: "normal"
  },
  {
    image: './assets/images/tickets/img.png',
    message: 'Contact Emaixvbcfl not Linked',
    userName: 'Tom Cruise',
    date: "2022-08-08T12:05:07.268Z",
    priority: "high"
  },
  {
    image: './assets/images/tickets/img.png',
    message: 'Contfdfdact Email not Linked',
    userName: 'Tom Crusssise',
    date: "2022-08-08T12:05:07.268Z",
    priority: "high"
  },
];

@Injectable({
  providedIn: "root"
})

export class TicketsService {

  private ticketsSource: BehaviorSubject<Ticket[]> = new BehaviorSubject<Ticket[]>(ELEMENT_DATA);
  private ticketsLength: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {

  }

  public updateDataSource(i: number = 0, size: number = 6): void {
    this.ticketsLength.next(ELEMENT_DATA.length)
    const arr = ELEMENT_DATA.slice(i * size, size * (i + 1));
    this.ticketsSource.next(arr)
  }

  public sortDataSource(): void {
    ELEMENT_DATA = ELEMENT_DATA.sort((a: Ticket, b: Ticket) => {
      if (a.priority === 'high' && b.priority !== 'high') {
        return -1;
      }
      return 0;
    })
    this.updateDataSource();
  }

  public get ticketsSource$(): Observable<Ticket[]> {
    return this.ticketsSource.asObservable();
  }

  public get ticketsLength$(): Observable<number> {
    return this.ticketsLength.asObservable()
  }

  public addTicket(ticket: AddTicketData): void {
    console.log(ticket)
    const body: Ticket = {
      message: ticket.description,
      userName: ticket.customerName,
      image: ticket.photo,
      date: ticket.date,
      priority: ticket.priority
    }
    ELEMENT_DATA.unshift(body)
    this.updateDataSource();
  }

}
