import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../business-objects/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todo$: Observable<Todo[]>;

  constructor(private todos: TodoService) { }

  ngOnInit() {
    this.todo$ = this.todos.getTodos();
  }
}
