import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Master {



  constructor(private http : HttpClient) {}  

  getSum(a: number, b: number): number {
    return a + b;
  }

  getUsers(){
    return this.http.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers");
  }
  
}
