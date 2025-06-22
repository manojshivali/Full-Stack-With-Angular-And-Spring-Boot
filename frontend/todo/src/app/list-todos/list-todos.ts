import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, DatePipe, LowerCasePipe } from '@angular/common'; // Added 
import { TodoDataService } from './../service/data/todo-data';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}

@Component({
  selector: 'app-list-todos',
  imports: [NgIf, NgFor, UpperCasePipe, DatePipe, LowerCasePipe], // Added
  templateUrl: './list-todos.html',
  styleUrl: './list-todos.css',
  standalone: true, // Generated - Change
})
// export class ListTodosComponent {

//   // Creating object
//   todo = {
//     id : 1,
//     description : 'Learn to Dance'
//   }

// }

// export class ListTodosComponent {

//   // Creating object
//   todos = [
//     {id : 1, description : 'Learn to Dance'},
//     {id : 2, description : 'Become an Expert at Angular'},
//     {id : 3, description : 'Visit India'}
//   ]
// }



//export class ListTodosComponent {

export class ListTodosComponent implements OnInit {

  // Creating object
  // todos = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become an Expert at Angular', false, new Date()),
  //   new Todo(3, 'Visit India', false, new Date())
  // ]

  constructor(
    private todoService: TodoDataService,  //Injecting TodaDataService
    private router: Router   //Route to specific screen, Dependency Injection
  ) { }

   todos: Todo[] = [];

   message: string = '';

    // ngOnInit() {
    //   this.todoService.retrieveAllTodos('mj').subscribe(
    //   response => {
    //     console.log(response);
    //     this.todos = response;
    //     }
    //   )
    // }

  ngOnInit() {
    this.refreshTodos();
  }

  deleteTodo(id: number) {
    console.log(`delete todo ${id}`)
    this.todoService.deleteTodo('mj', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: number) {
    console.log(`update todo ${id}`)
    this.router.navigate(['todos', id])   //Route to specific screen. 'todos' ==> Name of the route
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('mj').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }
}