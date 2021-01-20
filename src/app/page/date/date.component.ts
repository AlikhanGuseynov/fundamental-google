import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  dateList: Date[] = [];
  currentDate: Date = new Date();
  selectedDate: Date = new Date();
  week = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ];
  currentScroll = 0;
  timeList = [
    {id: 0, time: '8am - 10am'},
    {id: 1, time: '10am - 12am'},
    {id: 2, time: '10am - 12am'},
    {id: 3, time: '12am - 02pm'},
    {id: 4, time: '02pm - 04pm'},
    {id: 5, time: '04pm - 08pm'},
  ];
  activeTime = {id: 0, time: '8am - 10am'};
  @ViewChild('dateListEl') dateListEl: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
    this.getDateList();
  }

  getDateList(): void {
    const dateArr = [];
    let newDate: Date = new Date();
    const date: Date = new Date();

    for (let i = 0; i < 30; i++) {
      newDate = new Date(new Date().setDate(new Date().getDate() + i));
      dateArr.push(newDate);
    }

    this.dateList = [...dateArr];
  }

  getCurrentDate(day): boolean {
    return this.currentDate.getDate() === day.getDate();
  }

  selectDate(day): void {
    this.selectedDate = day;
  }

  checkActive(day): boolean {
    return this.selectedDate.getDate() === day.getDate()
      && this.selectedDate.getMonth() === day.getMonth();
  }

  navClick(value): void | boolean {
    if (this.currentScroll === 0 && value === -1) {
      return false;
    }
    if (this.currentScroll === 1776 && value === 1) {
      return false;
    }
    this.dateListEl.nativeElement.behavior = 'smooth';
    this.currentScroll = this.currentScroll + (value * 48);
    console.log(this.currentScroll);
    this.dateListEl.nativeElement.scrollLeft = this.currentScroll;
  }

}
