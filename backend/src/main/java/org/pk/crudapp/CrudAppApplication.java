package org.pk.crudapp;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.boot.context.event.ApplicationReadyEvent;

/**
 * @author Pravin P Patil
 * @version 1.0.0
 * @apiNote Crud Application startup class
 */
@Slf4j
@Controller
@SpringBootApplication
public class CrudAppApplication {

    public static void main(String[] args) {
        SpringApplication.run(CrudAppApplication.class, args);
    }

    @GetMapping
    public String index() {
        return "forward:/index.html";
    }

    @EventListener(ApplicationReadyEvent.class)
    public void applicationReadyEvent() {
        log.info("Application Started Successfully.");
    }

}
