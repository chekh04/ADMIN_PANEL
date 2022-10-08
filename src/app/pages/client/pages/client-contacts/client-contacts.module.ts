import { NgModule } from "@angular/core";
import { ClientContactsComponent } from "./layout/client-contacts.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { CommonModule } from "@angular/common";
import { ClientContactsRoutingModule } from "./client-contacts-routing.module";
import { EffectsModule } from "@ngrx/effects";
import { ContactsEffects } from "../../../../store/effects/contacts.effects";

@NgModule({
  declarations: [ClientContactsComponent],
  imports: [
    MatPaginatorModule,
    MatTableModule,
    CommonModule,
    ClientContactsRoutingModule,
    EffectsModule.forFeature([ContactsEffects])
  ]
})

export class ClientContactsModule {

}
