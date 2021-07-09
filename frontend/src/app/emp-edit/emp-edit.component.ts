import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../emp-list/emp.service';
import { Employee } from '../emp.model';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.scss']
})
export class EmpEditComponent implements OnInit {

  public employeeForm: FormGroup;

  constructor(private fb: FormBuilder,
    private employeeService: EmployeeService,
    private activateRoute: ActivatedRoute,
    private router: Router) {
    this.employeeForm = this.fb.group({
      empId: '',
      name: [''],
      age: [''],
      email: [''],
    });
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(response => this.getEmployee(response.id));
  }

  getEmployee(empId: number) {
    this.employeeService.getEmployee(empId)
      .subscribe(response => {
        if (response.status) {
          this.employeeForm.patchValue(response.data);
        } else {
          alert(response.message);
        }
      }, error => {
        alert("Error while fetching employee details");
      });
  }


  editEmployee(empForm: FormGroup) {
    if (empForm.valid) {
      let emp: Employee = empForm.value;
      this.employeeService.editEmployee(emp)
        .subscribe(response => {
          if (response.status) {
            alert(response.message);
            this.router.navigate(['emp-list']);
          } else {
            alert(response.message);
          }
        }, error => {
          alert("Error while adding employee");
        });
    } else {
      alert("Please fill form, something is missing or invalid");
    }
  }

}
