import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../emp.model";

import { Observable } from 'rxjs';
import { Response } from "../response.model";

@Injectable({ providedIn: "root" })
export class EmployeeService {
    baseUrl = 'http://localhost:8080/api';

    constructor(private http: HttpClient) {
    }

    getEmployeeList(): Observable<Employee[]> {
        return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
    }

    getEmployee(empId: number): Observable<Response> {
        return this.http.get<Response>(`${this.baseUrl}/employees/${empId}`);
    }

    addEmployee(emp: Employee): Observable<Response> {
        return this.http.post<Response>(`${this.baseUrl}/employees`, emp);
    }

    editEmployee(emp: Employee): Observable<Response> {
        return this.http.put<Response>(`${this.baseUrl}/employees`, emp);
    }

    deleteEmployee(empId: number): Observable<Response> {
        return this.http.delete<Response>(`${this.baseUrl}/employees/${empId}`);
    }

}
