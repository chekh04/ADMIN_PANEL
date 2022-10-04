import { NgModule } from "@angular/core";
import { ClientOverviewComponent } from "./layout/client-overview.component";
import { ClientOverviewRoutingModule } from "./client-overview-routing.module";
import { ClientModule } from "../../client.module";
import { ChartLineComponent } from "./chart-line/chart-line.component";

@NgModule({
    declarations: [ClientOverviewComponent, ChartLineComponent],
  exports: [ClientOverviewComponent],
    imports: [
        ClientOverviewRoutingModule,
        ClientModule
    ]
})

export class ClientOverviewModule {

}
