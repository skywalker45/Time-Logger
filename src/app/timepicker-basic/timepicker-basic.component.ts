import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timepicker-basic',
  templateUrl: './timepicker-basic.component.html',
  styleUrls: ['./timepicker-basic.component.scss']
})
export class TimepickerBasicComponent implements OnInit {

  @Input()  time: string;
  @Output() timeChange = new EventEmitter<string>();


  meridian = true;
  constructor() { }

  ngOnInit() {
  }

  
  savetime(time: string) {
    console.log(time);
    this.timeChange.emit(time);
  }


}
