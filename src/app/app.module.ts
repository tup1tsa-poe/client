import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DropdownSelectModule } from "./components/common/dropdown-select/dropdown-select.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DropdownSelectModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
