import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  todo$: Observable<Todo[]>;

  constructor(private todos: TodoService) { }

  ngOnInit() {
    this.todo$ = this.todos.getTodos();
  }
}
