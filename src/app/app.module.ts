import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarCreator } from './service/calendarCreator.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { IsNotCurrentMonthDirective } from './directives/is-not-current-month.directive';
import { CommonModule } from '@angular/common';
import { TodayDirective } from './directives/today.directive';
import { DefaultInputDirective } from './directives/default-input.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    IsNotCurrentMonthDirective,
    TodayDirective,
    DefaultInputDirective
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [CalendarCreator],
  bootstrap: [AppComponent]
})
export class AppModule { }
