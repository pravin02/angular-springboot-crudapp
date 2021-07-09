import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../emp.model';
import { EmployeeService } from './emp.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.employeeService.getEmployeeList()
      .subscribe(response => {
        this.employees = response;
      }, error => {
        console.log("Error Occured", error);
      });
  }

  deleteEmployee(empId: number) {
    this.employeeService.deleteEmployee(empId)
      .subscribe(response => {
        if (response.status) {
          alert(response.message);
          this.getEmployeeList();
        } else {
          alert(response.message);
        }
      }, error => {
        console.log("Error Occured", error);
      });
  }

  editEmployee(empId: number) {
    this.router.navigate(['emp-edit', empId]);
  }

}
