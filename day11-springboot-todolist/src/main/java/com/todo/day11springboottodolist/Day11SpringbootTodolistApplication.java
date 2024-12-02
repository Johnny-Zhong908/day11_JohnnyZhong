package com.todo.day11springboottodolist;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.todo")
public class Day11SpringbootTodolistApplication {

    public static void main(String[] args) {

        SpringApplication.run(Day11SpringbootTodolistApplication.class, args);
    }

}
