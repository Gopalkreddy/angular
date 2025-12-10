import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { ContrlFlow } from './components/contrl-flow/contrl-flow';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Admin, User, ContrlFlow, DataBinding, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practic');
}
