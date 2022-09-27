import { NgModule } from "@angular/core";
import { ClientSettingsComponent } from "./layout/client-settings.component";
import { CommonModule } from "@angular/common";
import { ClientSettingsRoutingModule } from "./client-settings-routing.module";
import { AdminInputModule } from "../../../../helpers/directives/admin-input/admin-input.module";
import { AdminButtonModule } from "../../../../helpers/directives/admin-button/admin-button.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ClientSettingsComponent],
  exports: [],
  imports: [
    CommonModule,
    ClientSettingsRoutingModule,
    AdminInputModule,
    AdminButtonModule,
    ReactiveFormsModule
  ]
})

export class ClientSettingsModule {

}
