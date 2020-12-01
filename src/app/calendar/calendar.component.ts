import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CalendarCreator } from '../service/calendarCreator.service';
import { Day } from '../models/day.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
  public monthDays: Day[];
  public countMonth: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  public monthNumber: number;

  //input aviable days
  public aviableDays: Array<Date> = [
    new Date("2021-01-3"),
    new Date("2021-01-5"),
    new Date("2021-02-7"),
    new Date("2021-04-28"),
    new Date("2021-01-19"),
  ];
  // input default day
  public defaultDay = new Date("2021-02-14");

  //Output chosen date
  @Output() chosenDate = new EventEmitter<Day>();
  // transform data for model Day format
  public formatedAviableDays: Array<Day> = [];
  public formatedDefaultDay: Day;
  public weekDaysName = [];

  public today = {
    day: new Date().getDate(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  };
  public year = this.today.year;

  private rangeAviableMonth: number[] = [];
  constructor(public calendarCreator: CalendarCreator) {}

  ngOnInit(): void {
    this.aviableDays.forEach((item) =>
      this.formatedAviableDays.push({
        number: item.getDate(),
        monthIndex: item.getMonth(),
        year: item.getFullYear(),
      })
    );

    this.formatedDefaultDay = {
      number: this.defaultDay.getDate(),
      monthIndex: this.defaultDay.getMonth(),
      year: this.defaultDay.getFullYear(),
    };

    this.rangeTwoAviableMonth();
    this.weekDaysName.push("S");
    this.weekDaysName.push("M");
    this.weekDaysName.push("T");
    this.weekDaysName.push("W");
    this.weekDaysName.push("T");
    this.weekDaysName.push("F");
    this.weekDaysName.push("S");
  }

  public onNextYear(): void {
    this.year++;
    this.rangeTwoAviableMonth();
  }

  public onPreviousYear(): void {
    this.year--;
    this.rangeTwoAviableMonth();
  }

  public chosenDay($event: Day): void {
    this.formatedDefaultDay = $event;
    this.chosenDate.emit($event);
  }

  public checkAviableDay(day: Day): boolean {
    if (
      day.isCurrentMonth &&
      this.formatedAviableDays.find(
        (aviableDay) =>
          aviableDay.number === day.number &&
          aviableDay.monthIndex === day.monthIndex &&
          aviableDay.year === this.year
      )
    ) {
      return true;
    }
    return false;
  }

  public checkDefaultDay(day: Day): boolean {
    if (
      day.isCurrentMonth &&
      this.formatedDefaultDay.number === day.number &&
      this.formatedDefaultDay.monthIndex === day.monthIndex &&
      this.formatedDefaultDay.year === this.year
    ) {
      return true;
    }
    return false;
  }

  private rangeTwoAviableMonth(): void {
    this.rangeAviableMonth = [];
    this.formatedAviableDays.forEach((item) => {
      if (item.year === this.year) {
        this.rangeAviableMonth.push(item.monthIndex);
      }
    });
    if (this.rangeAviableMonth.length) {
      this.countMonth = this.rangeAviableMonth.filter(
        (value, index, self) => self.indexOf(value) === index
      );
    } else {
      this.countMonth = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    }
  }
}
