import { NgModule } from "@angular/core";
import { AdminInputDirective } from "./admin-input.directive";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AdminInputDirective],
  exports: [AdminInputDirective],
  imports: [
    CommonModule
  ]
})

export class AdminInputModule {

}
