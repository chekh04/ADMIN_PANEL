import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ClientOverviewComponent } from "./layout/client-overview.component";

const routes: Routes = [
  {
    path: "",
    component: ClientOverviewComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientOverviewRoutingModule { }
