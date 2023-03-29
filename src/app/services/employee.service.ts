import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Employee } from '../Employee';
import {Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl='http://localhost:5000/employees';

  constructor(private http:HttpClient) { }

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.apiUrl)
  }

  deleteEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/${employee.id}`;
    return this.http.delete<Employee>(url);
  }

  addEmployee(employee:Employee):Observable<Employee>{
    return this.http.post<Employee>(this.apiUrl, employee, httpOptions);
  }
}
