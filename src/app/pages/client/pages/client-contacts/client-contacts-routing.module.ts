import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientContactsComponent } from "./layout/client-contacts.component";

const routes: Routes = [
  {
    path: "",
    component: ClientContactsComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClientContactsRoutingModule {

}
