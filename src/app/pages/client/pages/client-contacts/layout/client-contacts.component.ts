import { Component, OnInit } from '@angular/core';
import { filter, Observable } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { PageEvent } from "@angular/material/paginator";
import { ContactsService } from "../../../../../core/services/contacts-service";
import { Contact } from "../../../../../core/models/contact-model";
import { AddContactDialogComponent } from "../../../dialogs/add-contact-dialog/add-contact-dialog.component";

@Component({
  selector: 'app-client-contacts',
  templateUrl: './client-contacts.component.html',
  styleUrls: ['./client-contacts.component.scss']
})
export class ClientContactsComponent implements OnInit {

  public dataSource: Observable<Contact[]> = this.contactsService.contactsSource$;
  public totalTicketsLength$: Observable<number> = this.contactsService.contactsLength$;

  constructor(public dialog: MatDialog,
              private contactsService: ContactsService) {
  }

  ngOnInit(): void {
    this.contactsService.updateDataSource(0);
  }

  displayedColumns: string[] = ['name', 'email', 'address', 'date'];


  public openModal(): void {
    this.dialog
      .open(AddContactDialogComponent, {width: '380px', height: '660px'})
      .afterClosed()
      .pipe(filter(el => !!el))
      .subscribe(el => {
      this.contactsService.addContact(el);
    })
  }

  public onToggle(e: PageEvent): void {
    this.contactsService.updateDataSource(e.pageIndex, e.pageSize)
  }
  public sortData(): void {
    // this.contactsService.sortDataSource();
  }

}
