import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private empService: EmployeeServiceService) {}

  formHeader = '';
  employeeName = '';
  employeeID = '';
  age = '';
  mail = '';
  depart = '';
  showForm = false;
  employeeData = [];
  employees: any;
  id = null;

  ngOnInit(): void {
    this.getEmp();
  }

  getEmp() {
    this.empService.getEmp().subscribe((employeeData) => {
      return (this.employees = employeeData);
    });
  }

  deleteEmp(id:any){
    this.employees.data.forEach((element: {empId: any; }) =>{
      if(element.empId == id){
        this.employees.data.splice(this.employees.data.indexOf(element), 1);
        this.empService.deleteEmp(id).subscribe((res) => {
          this.getEmp();
        })
      }
    })
  }

  openForm(data = null) {
    this.showForm = true;
    if (data) {
        this.employeeName = data['fname'] + ' ' + data['lname'];
        this.employeeID = data['empId'];
        this.age = data['age'];
        this.mail = data['emailId'];
        this.depart = data['dept'];
        this.id = data['empId'];
        this.formHeader = 'Edit Employee';
    } else {
      this.employeeName = '';
      this.formHeader = 'Add Employee';
    }
  }

  closeForm() {
    this.showForm = false;
    this.clearForm();
  }

  clearForm(){
    this.employeeName = '';
    this.employeeID = '';
    this.age = '';
    this.mail = '';
    this.depart = '';
  }

  saveEmployee() {
    this.showForm = false;

    let body ={
      name: this.employeeName,
      id:this.employeeID,
      age: this.age,
      mail:this.mail,
      department: this.depart
    }
    if(this.id){
      body['id'] = this.employeeID;
      this.empService.putEmp(this.employeeID).subscribe((res)=>{
        this.getEmp();
      },
      )
    }
    this.empService.postEmp(body).subscribe((res)=>{
      this.getEmp();
    })
  }
}
