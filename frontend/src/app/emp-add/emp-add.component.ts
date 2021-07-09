import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../emp-list/emp.service';

import { Employee } from '../emp.model';

@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.scss']
})
export class EmpAddComponent implements OnInit {

  public employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm = this.fb.group({
      empId: '',
      name: [''],
      age: [''],
      email: [''],
    });
  }

  ngOnInit(): void {
  }


  saveEmployee(empForm: FormGroup) {
    if (empForm.valid) {
      let emp: Employee = empForm.value;
      this.employeeService.addEmployee(emp)
        .subscribe(response => {
          if (response.status) {
            alert(response.message);
            this.employeeForm.reset();
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
