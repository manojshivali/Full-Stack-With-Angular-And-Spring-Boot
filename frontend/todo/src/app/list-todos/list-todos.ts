import { Component } from '@angular/core';
import { NgIf, NgFor, UpperCasePipe, DatePipe, LowerCasePipe } from '@angular/common'; // Added 

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



export class ListTodosComponent {

  // Creating object
  todos = [
    new Todo(1, 'Learn to Dance', false, new Date()),
    new Todo(2, 'Become an Expert at Angular', false, new Date()),
    new Todo(3, 'Visit India', false, new Date())
  ]
}