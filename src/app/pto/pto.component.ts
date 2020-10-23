import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pto',
  templateUrl: './pto.component.html',
  styleUrls: ['./pto.component.scss']
})
export class PtoComponent implements OnInit {
  
  employeeTime;

  constructor(private formBuilder: FormBuilder) {
    this.employeeTime = this.formBuilder.group({
      startdate: '',
      enddate: '',
      starttime: '',
      endtime: ''
    });
   }

  ngOnInit() {
  }

  logDate(startDate, EndDate) {
    console.log(startDate, EndDate);
  }

  onSubmit(employeeTime) {
    console.log(employeeTime);
  }

}
