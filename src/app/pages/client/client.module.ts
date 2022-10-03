import { NgModule } from "@angular/core";
import { ClientComponent } from "./layout/client.component";
import { CommonModule } from "@angular/common";
import { ClientRoutingModule } from "./client-routing.module";
import { ClientSidenavComponent } from './components/client-sidenav/client-sidenav.component';
import { ClientHeaderComponent } from './components/client-header/client-header.component';
import { AddTicketDialogComponent } from './dialogs/add-ticket-dialog/add-ticket-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { AdminInputModule } from "../../helpers/directives/admin-input/admin-input.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker"
import { MatInputModule } from "@angular/material/input";
import { AdminButtonModule } from "../../helpers/directives/admin-button/admin-button.module";
import { MatSelectModule } from "@angular/material/select";
import { ReactiveFormsModule } from "@angular/forms";
import { AddContactDialogComponent } from './dialogs/add-contact-dialog/add-contact-dialog.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';

@NgModule({
  declarations: [
    ClientComponent,
    ClientSidenavComponent,
    ClientHeaderComponent,
    AddTicketDialogComponent,
    AddContactDialogComponent,
    LineChartComponent,
  ],
    exports: [ClientComponent, LineChartComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MatDialogModule,
    AdminInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    AdminButtonModule,
    MatSelectModule,
    ReactiveFormsModule,

  ]
})

export class ClientModule {

}
