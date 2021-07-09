package org.pk.crudapp.controllers;

import org.pk.crudapp.entities.Employee;
import org.pk.crudapp.models.Response;
import org.pk.crudapp.repositories.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.http.ResponseEntity;

import java.util.Collection;
import java.util.Optional;

/**
 * @author Pravin P Patil
 * EmployeeController is about to fetch/add/edit/delete employees
 */
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    /**
     * Mapping for fetch employee list
     *
     * @return List<Employee>
     */
    @GetMapping
    public Collection<Employee> getEmployees() {
        return this.employeeRepository.findAll();
    }

    /**
     * @param employeeId to fetch employee details by employeeId
     * @return
     */
    @GetMapping("/{employeeId}")
    public ResponseEntity<?> getEmployee(@PathVariable Long employeeId) {
        Response response = new Response();
        Optional<Employee> emp = this.employeeRepository.findById(employeeId);
        if (emp.isPresent()) {
            response.setData(emp.get());
            response.setStatus(true);
        } else {
            response.setMessage("Employee not exists with " + employeeId);
        }
        return ResponseEntity.ok(response);
    }

    /**
     * Mapping for add employee if not exist already
     *
     * @param employee
     * @return
     */
    @PostMapping
    public ResponseEntity<?> addEmployee(@RequestBody Employee employee) {
        Response response = new Response();
        Optional<Employee> emp = this.employeeRepository.findById(employee.getEmpId());
        if (!emp.isPresent()) {
            this.employeeRepository.save(employee);
            response.setMessage("Employee Added Successfully");
            response.setStatus(true);
        } else {
            response.setMessage("Employee already exists with " + employee.getEmpId());
        }
        return ResponseEntity.ok(response);
    }

    /**
     * Mapping for edit employee if it is exists
     *
     * @param employee
     * @return
     */
    @PutMapping
    public ResponseEntity<?> editEmployee(@RequestBody Employee employee) {
        Response response = new Response();
        Optional<Employee> emp = this.employeeRepository.findById(employee.getEmpId());
        if (emp.isPresent()) {
            this.employeeRepository.save(employee);
            response.setMessage("Employee Updated Successfully");
            response.setStatus(true);
        } else {
            response.setMessage("Employee not exists with " + employee.getEmpId());
        }
        return ResponseEntity.ok(response);
    }

    /**
     * Mapping for delete employee if it is exists
     *
     * @param employeeId
     * @return
     */
    @DeleteMapping("/{employeeId}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long employeeId) {
        Response response = new Response();
        Optional<Employee> emp = this.employeeRepository.findById(employeeId);
        if (!emp.isPresent()) {
            response.setMessage("Employee does not exists with " + employeeId);
        } else {
            this.employeeRepository.delete(emp.get());
            response.setMessage("Employee Deleted successfully");
            response.setStatus(true);
        }
        return ResponseEntity.ok(response);
    }
}
