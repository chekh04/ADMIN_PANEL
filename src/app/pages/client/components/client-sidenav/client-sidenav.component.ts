import { Component, OnInit } from '@angular/core';
import SidenavOptionModel from "../../../../core/models/sidenav-option-model";

@Component({
  selector: 'app-client-sidenav',
  templateUrl: './client-sidenav.component.html',
  styleUrls: ['./client-sidenav.component.scss']
})
export class ClientSidenavComponent implements OnInit {

  public sidenavOptions: SidenavOptionModel[];

  constructor() {
    this.sidenavOptions = this.getSidenavOptions();
  }

  ngOnInit(): void {
  }

  private getSidenavOptions(): SidenavOptionModel[] {
    return [
      {
        name: "Overview",
        icon: "./assets/icons/sidenav-icons/overview-icon.svg",
        link: "overview"
      },
      {
        name: "Tickets",
        icon: "./assets/icons/sidenav-icons/ticket-icon.svg",
        link: "tickets"
      },
      {
        name: "Contacts",
        icon: "./assets/icons/sidenav-icons/contacts-icon.svg",
        link: "contacts"
      },
      {
        name: "Settings",
        icon: "./assets/icons/sidenav-icons/settings-icon.svg",
        link: "settings"


      },
    ];
  }
}
