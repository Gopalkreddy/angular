import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Master } from '../../services/master';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {

  router = inject(Router);

  loggedInUserName : string = '';

  constructor(masterService: Master) {

    this.reLoad();

    masterService.onLogin.subscribe((res:boolean)=>{
        this.reLoad();

    });
  }

  reLoad(){
    this.loggedInUserName = localStorage.getItem('userName') || '';
  }

  logout(){
    console.log('logout');
    debugger;
    localStorage.removeItem('userName');
   this.reLoad();
     this.loggedInUserName = '';
    this.router.navigate(['/login']);

  }
}
