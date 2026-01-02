import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { Admin } from './components/admin/admin';
import { User } from './components/user/user';
import { DataBinding } from './components/data-binding/data-binding';
import { ContrlFlow } from './components/contrl-flow/contrl-flow';
import { AttDirective } from './att-directive/att-directive';
import { Master } from './services/master';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Admin, User, ContrlFlow, DataBinding, RouterLink,AttDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practic');

  // router = inject(Router);

  // loggedInUserName : string = '';

  // constructor(masterService: Master) {

  //   this.reLoad();

  //   masterService.onLogin.subscribe((res:boolean)=>{
  //       this.reLoad();

  //   });
  // }

  // reLoad(){
  //   this.loggedInUserName = localStorage.getItem('userName') || '';
  // }

  // logout(){
  //   console.log('logout');
  //   debugger;
  //   localStorage.removeItem('userName');
  //  this.reLoad();
  //    this.loggedInUserName = '';
  //   this.router.navigate(['/login']);

  // }
}