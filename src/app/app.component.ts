import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit {

  constructor(private empService: EmployeeServiceService) {}

  employeeData = [];
  employees: any;

  ngOnInit(): void {
    this.empService.getEmp().subscribe((employeeData) => {
      console.log('data', employeeData);

      return (this.employees = employeeData);
    });
  }

 
 
}

