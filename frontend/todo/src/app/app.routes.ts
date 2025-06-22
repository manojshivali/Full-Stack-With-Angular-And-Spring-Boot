
import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome';
import { LoginComponent } from './login/login';
import { ErrorComponent } from './error/error';
import { ListTodosComponent } from './list-todos/list-todos';
import { LogoutComponent } from './logout/logout'; // Import this
import { RouteGuardService } from './service/route-guard';
import { TodoComponent } from './todo/todo';

// // welcome 
// export const routes: Routes = [
//   { path: '', component: LoginComponent }, 
//   { path: 'login', component: LoginComponent },
//   //{ path: 'welcome', component: WelcomeComponent },
//   { path: 'welcome/:name', component: WelcomeComponent},
//   { path: 'todos', component: ListTodosComponent },
//   { path: 'logout', component: LogoutComponent }, // Add this one
//   { path: '**', component: ErrorComponent }   // Order is very important in routing, make sure to put all routing before **, otherwise it will map always with anything.
// ];



// welcome 
export const routes: Routes = [
  { path: '', component: LoginComponent }, //canActivate==>src\app\service\route-guard.ts, RouteGuardService
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate:[RouteGuardService]},
  { path: 'todos', component: ListTodosComponent, canActivate:[RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate:[RouteGuardService] },
  { path: 'todos/:id', component: TodoComponent, canActivate:[RouteGuardService] },

  { path: '**', component: ErrorComponent }   // Order is very important in routing, make sure to put all routing before **, otherwise it will map always with anything.
];