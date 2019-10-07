import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface Value {
  readonly name: string;
  readonly value: string;
}
interface Group {
  readonly name: string;
  readonly values: ReadonlyArray<Value>;
}
interface Data {
  readonly label: string;
  readonly groups: ReadonlyArray<Group>;
  readonly defaultValue: Value;
  readonly rootValues: ReadonlyArray<Value>;
}

@Component({
  selector: "app-dropdown-select",
  templateUrl: "./dropdown-select.component.html",
  styleUrls: ["./dropdown-select.component.scss"]
})
export class DropdownSelectComponent {
  @Input() data!: Data;
  @Output() selectedEmitter = new EventEmitter<string>();

  faCaretDown = faCaretDown;
  isOpened = false;
  selectedValue: Value | null = null;

  handleChange(value: string) {
    this.selectedEmitter.emit(value);
  }
}
