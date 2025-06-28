import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './../service/data/todo-data';
import { Todo } from '../list-todos/list-todos';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [NgIf, DatePipe, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.css'
})
export class TodoComponent implements OnInit {

  id: number = 0;
  todo: Todo = new Todo(this.id, '', false, new Date());

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
      this.id = this.route.snapshot.params['id'];

      this.todo = new Todo(this.id, '', false, new Date());
      if (this.id != -1) {
      this.todoService.retrieveTodo('mjsingh', this.id)
        .subscribe(
          data => this.todo = data
        )
      }  
  }

  saveTodo() {
      if (this.id == -1) { //=== ==
      this.todoService.createTodo('mjsingh', this.todo)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
        )
    } else {
      this.todoService.updateTodo('mjsingh', this.id, this.todo)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
        )
    }
  }

}
