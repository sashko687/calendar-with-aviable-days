import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from "@angular/animations";
import { Day } from "./models/day.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"],
  animations: [
    trigger("myInsertRemoveTrigger", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("300ms", style({ opacity: 1, transform: 'translateX(-300px)' })),
      ]),
      transition(":leave", [animate("300ms", style({ opacity: 0 }))]),
    ]),
  ],
})
export class AppComponent {
  title = "Datepicker";
  isShownFrom = false;
  isShownTo = false;
  from: string;
  to: string;
  date: string;


  getFrom(date: Day) {
    this.from = date.number + ' ' + date.month + ' ' + date.year;
    this.isShownFrom = false;
  }
  getTo(date: Day){
    this.to = date.number + ' ' + date.month + ' ' + date.year;
    this.isShownTo = false;
  }
}
