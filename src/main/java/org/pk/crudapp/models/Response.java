package org.pk.crudapp.models;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

/**
 * @author Pravin P Patil
 * @apiNote Response class to hold data which would be sent to requested client
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Response {
    private String message;
    private Object data;
    private boolean status;
}
