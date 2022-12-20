import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http : HttpClient) { }


  getEmp(){
    return this.http.get("https://ml.thelightbulb.ai/api/employees");
  }
}
