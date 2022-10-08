import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Contact } from "../models/contact-model";

let ELEMENT_DATA: Contact[] = [
  {
    userPhoto: './assets/images/tickets/user-logo-2.png',
    name: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    email: "mandeep.walton@gmail.com",
    address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate\",B98 9PA\n"
  },
  {
    userPhoto: './assets/images/tickets/user-logo-2.png',
    name: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    email: "mandeep.walton@gmail.com",
    address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate\",B98 9PA\n"
  },
  {
    userPhoto: './assets/images/tickets/user-logo-2.png',
    name: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    email: "mandeep.walton@gmail.com",
    address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate\",B98 9PA\n"
  },
  {
    userPhoto: './assets/images/tickets/user-logo-2.png',
    name: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    email: "mandeep.walton@gmail.com",
    address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate\",B98 9PA\n"
  },
  {
    userPhoto: './assets/images/tickets/user-logo-2.png',
    name: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    email: "mandeep.walton@gmail.com",
    address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate\",B98 9PA\n"
  },
  {
    userPhoto: './assets/images/tickets/user-logo-2.png',
    name: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    email: "mandeep.walton@gmail.com",
    address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate\",B98 9PA\n"
  },
  {
    userPhoto: './assets/images/tickets/user-logo-2.png',
    name: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    email: "mandeep.walton@gmail.com",
    address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate\",B98 9PA\n"
  },
  {
    userPhoto: './assets/images/tickets/user-logo-2.png',
    name: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    email: "mandeep.walton@gmail.com",
    address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate\",B98 9PA\n"
  },
  {
    userPhoto: './assets/images/tickets/user-logo-2.png',
    name: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    email: "mandeep.walton@gmail.com",
    address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate\",B98 9PA\n"
  },
  {
    userPhoto: './assets/images/tickets/user-logo-2.png',
    name: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    email: "mandeep.walton@gmail.com",
    address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate\",B98 9PA\n"
  },
  {
    userPhoto: './assets/images/tickets/user-logo-2.png',
    name: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    email: "mandeep.walton@gmail.com",
    address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate\",B98 9PA\n"
  },
  {
    userPhoto: './assets/images/tickets/user-logo-2.png',
    name: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    email: "mandeep.walton@gmail.com",
    address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate\",B98 9PA\n"
  },
  {
    userPhoto: './assets/images/tickets/user-logo-2.png',
    name: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    email: "mandeep.walton@gmail.com",
    address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate\",B98 9PA\n"
  },
  {
    userPhoto: './assets/images/tickets/user-logo-2.png',
    name: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    email: "mandeep.walton@gmail.com",
    address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate\",B98 9PA\n"
  },{
    userPhoto: './assets/images/tickets/user-logo-2.png',
    name: 'Tom ereCruise',
    date: "2022-08-08T12:05:07.268Z",
    email: "mandeep.walton@gmail.com",
    address: "Unit 1, Moons Park, Burnt Meadow Road, Moons Moat North Industrial Estate\",B98 9PA\n"
  },
];

@Injectable({
  providedIn: "root"
})

export class ContactsService {

  private contactsSource: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>(ELEMENT_DATA);
  private contactsLength: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() {

  }

  public updateDataSource(i: number = 0, size: number = 6): void {
    this.contactsLength.next(ELEMENT_DATA.length)
    const arr = ELEMENT_DATA.slice(i * size, size * (i + 1));
    this.contactsSource.next(arr)
  }

  public get contactsSource$(): Observable<Contact[]> {
    return this.contactsSource.asObservable();
  }
  public get contactsLength$(): Observable<number> {
    return this.contactsLength.asObservable()
  }

  public addContact(contact: any): void {
    const body: Contact = {
      name: contact.name,
      userPhoto: contact.photo,
      date: contact.date,
      email: contact.email,
      address: contact.address
    }
    ELEMENT_DATA.unshift(body)
    this.updateDataSource();
  }

}
