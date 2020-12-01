import { Day } from "../models/day.model";

export class CalendarCreator {
  private currentYear: number;
  private currentMonthIndex: number;

  constructor() {
    let date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonthIndex = date.getMonth();
  }

  public getCurrentMonth(): Day[] {
    return this.getMonth(this.currentMonthIndex, this.currentYear);
  }

  public getMonth(monthIndex: number, year: number): Day[] {
    const days = [];
    const countDaysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    const countDaysInPreviousMonth = new Date(year, monthIndex, 0).getDate();
    const firstday = this.createDay(1, monthIndex, year, true);
    // create days before printed current days of month;
    for (let i = 0; i < firstday.weekDayNumber; i++) {
      days.push(this.createDay(countDaysInPreviousMonth - (firstday.weekDayNumber - 1 - i), monthIndex + 1, year, false));
    }
    days.push(firstday);
    // create  days for current month
    for (let i = 2; i < countDaysInMonth + 1; i++) {
      days.push(this.createDay(i, monthIndex, year, true));
    }
    // create  days after printed current days of month;
    for ( let i = 1; i < 42 - countDaysInMonth + 1 - firstday.weekDayNumber; i++ ) {
      days.push(this.createDay(i, monthIndex + 1, year, false));
    }
    return days;
  }

  public getMonthName(monthIndex: number): string {
    switch (monthIndex) {
      case 0:
        return 'January';
      case 1:
        return 'February';
      case 2:
        return 'March';
      case 3:
        return 'April';
      case 4:
        return 'May';
      case 5:
        return 'June';
      case 6:
        return 'July';
      case 7:
        return 'August';
      case 8:
        return 'September';
      case 9:
        return 'October';
      case 10:
        return 'November';
      case 11:
        return 'December';

      default:
        return ' ';
    }
  }

  public getWeekDayName(weekDay: number): string {
    switch (weekDay) {
      case 0:
        return 'Su'; // Sunday
      case 1:
        return 'Mo'; // Monday
      case 2:
        return 'Tu'; // Tuesday
      case 3:
        return 'We'; // Wednesday
      case 4:
        return 'Th'; // Thursday
      case 5:
        return 'Fr'; // Friday
      case 6:
        return 'Sa'; // Saturday

      default:
        return '';
    }
  }

  private createDay(dayNumber: number, monthIndex: number, year: number, currentMonth: boolean) {
    const day = new Day();

    day.monthIndex = monthIndex;
    day.month = this.getMonthName(monthIndex);

    day.number = dayNumber;
    day.year = year;

    day.weekDayNumber = new Date(year, monthIndex, dayNumber).getDay();
    day.weekDayName = this.getWeekDayName(day.weekDayNumber);

    day.isCurrentMonth = currentMonth;

    return day;
  }
}
