import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { DropdownSelectComponent } from "./dropdown-select.component";

@NgModule({
  declarations: [DropdownSelectComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [DropdownSelectComponent]
})
export class DropdownSelectModule {}
