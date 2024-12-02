package com.todo.day11springboottodolist;

import com.todo.model.Todo;
import com.todo.respository.TodoRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Objects;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class TodoControllerIntegrationTest {
    @LocalServerPort
    private int port;

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private TodoRepository todoRepository;

    @Test
    public void testGetAllTodos() {
        ResponseEntity<Todo[]> response = restTemplate.getForEntity("http://localhost:" + port + "/api/todos", Todo[].class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
    }

    @Test
    public void testCreateTodo() {
        Todo todo = new Todo(null, "Test Item", false);
        ResponseEntity<Todo> response = restTemplate.postForEntity("http://localhost:" + port + "/api/todos", todo, Todo.class);
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(Objects.requireNonNull(response.getBody()).getId()).isNotNull();
    }
}