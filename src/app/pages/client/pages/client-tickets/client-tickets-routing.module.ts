import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ClientTicketsComponent } from "./layout/client-tickets.component";

const routes: Routes = [
  {
    path: "",
    component: ClientTicketsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientTicketsRoutingModule { }
