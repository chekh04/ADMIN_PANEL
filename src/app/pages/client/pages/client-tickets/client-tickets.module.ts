import { NgModule } from "@angular/core";
import { ClientTicketsComponent } from "./layout/client-tickets.component";
import { CommonModule } from "@angular/common";
import { ClientTicketsRoutingModule } from "./client-tickets-routing.module";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";

@NgModule({
  declarations: [
    ClientTicketsComponent
  ],
  exports: [],
    imports: [
        CommonModule,
        ClientTicketsRoutingModule,
        MatTableModule,
        MatButtonModule,
        MatPaginatorModule
    ]
})

export class ClientTicketsModule {

}
