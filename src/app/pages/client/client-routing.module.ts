import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { ClientComponent } from "./layout/client.component";
import { AuthGuard } from "../../core/guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: ClientComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "tickets"
      },
      {
        path: "overview",
        loadChildren: () => import('./pages/client-overview/client-overview.module').then(m => m.ClientOverviewModule),
        canActivate: [AuthGuard]
      },
      {
        path: "tickets",
        loadChildren: () => import('./pages/client-tickets/client-tickets.module').then(m => m.ClientTicketsModule)
      },
      {
        path: "settings",
        loadChildren: () => import('./pages/client-settings/client-settings.module').then(m => m.ClientSettingsModule)
      },
      {
        path: "contacts",
        loadChildren: () => import('./pages/client-contacts/client-contacts.module').then(m => m.ClientContactsModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
