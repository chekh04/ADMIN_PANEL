import { NgModule } from "@angular/core";
import { ClientOverviewComponent } from "./layout/client-overview.component";
import { ClientOverviewRoutingModule } from "./client-overview-routing.module";
import { ClientModule } from "../../client.module";

@NgModule({
  declarations: [ClientOverviewComponent],
  exports: [ClientOverviewComponent],
    imports: [
        ClientOverviewRoutingModule,
        ClientModule
    ]
})

export class ClientOverviewModule {

}
