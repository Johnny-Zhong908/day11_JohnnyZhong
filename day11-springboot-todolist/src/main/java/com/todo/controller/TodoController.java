package com.todo.controller;


import com.todo.model.Todo;
import com.todo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/axios/AxiosTodoList")
@CrossOrigin(origins = "http://localhost:3000")
public class TodoController {
    private final TodoService todoService;
    public TodoController(TodoService todoService){
        this.todoService = todoService;
    }
    @GetMapping
    public List<Todo> getAllTodos(){
        return todoService.findAll();
    }
    @GetMapping("/{id}")
   public Todo getTodoByID(@PathVariable int id){
        return todoService.findById(id);
    }
    @PostMapping
    public Todo createTodo(@RequestBody Todo todo){
        return todoService.save(todo);
    }
    @PutMapping("/{id}")
    public Todo updateTodo(@PathVariable int id,@RequestBody Todo updateTodo){
        Todo existTodo = todoService.findById(id);
        existTodo.setText(existTodo.getText());
        existTodo.setDone(existTodo.getDone());
        return todoService.save(existTodo);
    }
    @DeleteMapping("/{id}")
    public void deleteTodoById(@PathVariable int id){
        todoService.deleteByID(id);
    }

}
