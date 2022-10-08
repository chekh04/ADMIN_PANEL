import { Component, OnInit } from '@angular/core';
import { combineLatest, filter, map, Observable, tap } from "rxjs";
import { MatDialog } from "@angular/material/dialog";
import { PageEvent } from "@angular/material/paginator";
import { ContactsService } from "../../../../../core/services/contacts-service";
import { Contact } from "../../../../../core/models/contact-model";
import { AddContactDialogComponent } from "../../../dialogs/add-contact-dialog/add-contact-dialog.component";
import { Store } from "@ngrx/store";
import {
  invokeEffectOnContactAdd,
  invokeEffectOnInit,
  invokeEffectOnToggle
} from "../../../../../store/actions/contacts.actions";
import { contactsLengthSelector, contactsSourceSelector } from "../../../../../store/selectors/contacts.selectors";

@Component({
  selector: 'app-client-contacts',
  templateUrl: './client-contacts.component.html',
  styleUrls: ['./client-contacts.component.scss']
})
export class ClientContactsComponent implements OnInit {

  public dataSource$: Observable<Contact[]> = this.store.select(contactsSourceSelector);
  public totalLength$: Observable<number> = this.store.select(contactsLengthSelector);

  constructor(public dialog: MatDialog,
              private store: Store) {
    this.store.dispatch(invokeEffectOnInit())
  }

  ngOnInit() {
  }

  displayedColumns: string[] = ['name', 'email', 'address', 'date'];


  public openModal(): void {
    this.dialog
      .open(AddContactDialogComponent, {width: '380px', height: '660px'})
      .afterClosed()
      .pipe(
        filter(el => !!el),
        map(res => this.store.dispatch(invokeEffectOnContactAdd({data: res})))
      ).subscribe()
  }

  public onToggle(e: PageEvent): void {
    this.store.dispatch(invokeEffectOnToggle({index: e.pageIndex, size: e.pageSize}))
  }

}
