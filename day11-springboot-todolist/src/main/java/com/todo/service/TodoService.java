package com.todo.service;

import com.todo.model.Todo;
import com.todo.respository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class TodoService {
    private final TodoRepository todoRepository;
    public TodoService(TodoRepository todoRepository){
        this.todoRepository = todoRepository;
    }
    public List<Todo> findAll(){
        return todoRepository.findAll();
    }
    public Todo findById(int id){
        return todoRepository.findById(id).orElseThrow(() -> new RuntimeException("Todo Not Found"));
    }
    public Todo save(Todo todo){
        return todoRepository.save(todo);
    }
    public void deleteByID(int id){
        todoRepository.deleteById(id);
    }
}
