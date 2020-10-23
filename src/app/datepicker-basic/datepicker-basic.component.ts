import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-basic',
  templateUrl: './datepicker-basic.component.html',
  styleUrls: ['./datepicker-basic.component.scss']
})
export class DatepickerBasicComponent implements OnInit {

  @Input()  date: string;
  @Output() dateChange = new EventEmitter<string>();

  constructor(private calendar: NgbCalendar) { }

  ngOnInit() {
  }

  model: NgbDateStruct;

  savedate(date: string) {
    console.log(date);
    this.dateChange.emit(date);
  }

}
