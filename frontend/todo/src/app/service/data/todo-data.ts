import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../../list-todos/list-todos';
import { API_URL, TODO_JPA_API_URL } from './../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
     private http: HttpClient
  ) { }

  retrieveAllTodos(username: string) {
    //return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`);
    //return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`);
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
  }

  deleteTodo(username: string, id: number) {
    //return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`);
    // return this.http.delete(`${API_URL}/users/${username}/todos/${id}`);
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  retrieveTodo(username: string, id: number) {
    //return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`);
    //return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`);
     return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`);
  }

  updateTodo(username: string, id: number, todo: Todo) {
    //return this.http.put<Todo>(`http://localhost:8080/users/${username}/todos/${id}`, todo);
    //return this.http.put<Todo>(`${API_URL}/users/${username}/todos/${id}`, todo);
    return this.http.put<Todo>(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`, todo);
  }

  createTodo(username: string, todo: Todo) {
    //return this.http.post<Todo>(`http://localhost:8080/users/${username}/todos`, todo);
    //return this.http.post<Todo>(`${API_URL}/${username}/todos`, todo);
    return this.http.post<Todo>(`${TODO_JPA_API_URL}/${username}/todos`, todo);
  }  

}
