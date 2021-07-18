package org.pk.crudapp.entities;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Id;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;

/**
 * @author Pravin P Patil
 * @apiNote Employee Entity class to map with employees database table
 * lomobok annotations are used to generate constructors, getters and setters
 */
@Entity
@Table(name = "employees")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    /**
     * empId is autogenerated
     */
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long empId;
    @Column
    private String name;
    @Column
    private int age;
    @Column
    private String email;
}