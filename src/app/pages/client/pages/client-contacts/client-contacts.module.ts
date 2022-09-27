import { NgModule } from "@angular/core";
import { ClientContactsComponent } from "./layout/client-contacts.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { CommonModule } from "@angular/common";
import { ClientContactsRoutingModule } from "./client-contacts-routing.module";

@NgModule({
  declarations: [ClientContactsComponent],
  imports: [
    MatPaginatorModule,
    MatTableModule,
    CommonModule,
    ClientContactsRoutingModule
  ]
})

export class ClientContactsModule {

}
