import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Master {

  onLogin : Subject<boolean> = new Subject<boolean>();



  constructor(private http : HttpClient) {}  

  getSum(a: number, b: number): number {
    return a + b;
  }

  getUsers(){
    return this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers");
  }


  
}
