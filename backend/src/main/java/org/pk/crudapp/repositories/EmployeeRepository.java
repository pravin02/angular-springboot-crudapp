package org.pk.crudapp.repositories;

import org.pk.crudapp.entities.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * @author Pravin P Patil
 * @apiNote employee repository extending jpa repository to get all the default methods
 */
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
