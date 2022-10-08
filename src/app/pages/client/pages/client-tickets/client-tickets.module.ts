import { NgModule } from "@angular/core";
import { ClientTicketsComponent } from "./layout/client-tickets.component";
import { CommonModule } from "@angular/common";
import { ClientTicketsRoutingModule } from "./client-tickets-routing.module";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatPaginatorModule } from "@angular/material/paginator";
import { EffectsModule } from "@ngrx/effects";
import { TicketsEffects } from "../../../../store/effects/tickets.effects";

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
        MatPaginatorModule,
        EffectsModule.forFeature([TicketsEffects])
    ]
})

export class ClientTicketsModule {

}
