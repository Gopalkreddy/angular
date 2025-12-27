import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule,NgStyle],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {

  httpClint = inject(HttpClient);
  userList:any[]=[];

  userObject : any={
  "userId": 0,
  "emailId": "",
  "password": "",
  "fullName": "",
  "mobileNo": ""
  }

  getUsers(){
    this.httpClint.get("https://api.freeprojectapi.com/api/GoalTracker/getAllUsers").subscribe((res:any)=>{
      console.log(res);
      this.userList = res;
    }); 
  }

  ngOnInit(){
    this.getUsers();
  }
  saveUser(){
    this.httpClint.post("https://api.freeprojectapi.com/api/GoalTracker/register",this.userObject).subscribe((res:any)=>{
      console.log(res);
      alert("User Registered Successfully");
      this.getUsers();
    }); 
  }

  editUser(user:any){
    this.userObject = user;
  }

  updateUser(){
    this.httpClint.put("https://api.freeprojectapi.com/api/GoalTracker/updateUser?id="+this.userObject.userId,this.userObject).subscribe((res:any)=>{
      console.log(res);
      alert("User Updated Successfully");
      this.getUsers();
    }); 
  }

  reset(){
    this.userObject = {
      "userId": 0,
      "emailId": "",
      "password": "",
      "fullName": "",
      "mobileNo": ""
    }
  }

  deleteUser(userId:number){
    this.httpClint.delete("https://api.freeprojectapi.com/api/GoalTracker/deleteUserById?Id=" + userId).subscribe((res:any)=>{
      console.log(res);
      alert("User Deleted Successfully");
      this.getUsers();
    }); 
  }

  

}
