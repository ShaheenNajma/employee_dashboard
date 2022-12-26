import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http : HttpClient) { }


  getEmp(){
    return this.http.get("https://ml.thelightbulb.ai/api/employees");
  }

  //for delete
  deleteEmp(id: any){
   return  this.http.delete('https://ml.thelightbulb.ai/api/employees' + "/" + id);
  }

  //for save
  postEmp(body: any){
    return this.http.post('https://ml.thelightbulb.ai/api/employees', body);
  }

  //for update
  putEmp(body: any){
    return this.http.put('https://ml.thelightbulb.ai/api/employees/0008', body);
  }

}
