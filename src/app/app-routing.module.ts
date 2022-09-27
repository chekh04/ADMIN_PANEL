import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from "./pages/sign-pages/sign-up/sign-up.component";
import { AppComponent } from "./app.component";

const routes: Routes = [
  {
    path: "",
    component: AppComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "client"
      },
      {
        path: "client",
        loadChildren: () => import("./pages/client/client.module").then(m => m.ClientModule)
      },
      {
        path: "sign-up",
        component: SignUpComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
