import { NgModule } from "@angular/core";
import { AdminButtonDirective } from "./admin-button.directive";

@NgModule({
  declarations: [
    AdminButtonDirective,
  ],
  exports: [
    AdminButtonDirective
  ],
  imports: []
})

export class AdminButtonModule {

}
