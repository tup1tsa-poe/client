import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "my-app";
  selectData = {
    label: "Type",
    defaultValue: { name: "any", value: "" },
    groups: [
      {
        name: "Weapons",
        values: [
          { name: "Generic two-handed-weapon", value: "two-hander" },
          { name: "Dager", value: "dager" }
        ]
      },
      {
        name: "Armour",
        values: [
          { name: "Body armour", value: "body" },
          { name: "Boots", value: "boots" },
          { name: "gloves", value: "gloves" }
        ]
      }
    ]
  };

  checkValue(value: string) {
    console.log(value);
  }
}
