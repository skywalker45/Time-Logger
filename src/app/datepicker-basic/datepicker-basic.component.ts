import { Component, OnInit } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-basic',
  templateUrl: './datepicker-basic.component.html',
  styleUrls: ['./datepicker-basic.component.scss']
})
export class DatepickerBasicComponent implements OnInit {

  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
  }

  model: NgbDateStruct;
  date: {year: number, month: number};

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
