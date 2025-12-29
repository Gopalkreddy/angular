import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';



@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule,NgStyle],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.css',
})
export class ReactiveForm implements OnInit {

  httpClint = inject(HttpClient);
  userList:any[]=[];

  userForm : FormGroup = new FormGroup({
    userId : new FormControl(0),
    emailId : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(4)]),
    fullName : new FormControl('',[Validators.required]),
    mobileNo : new FormControl('')
  });

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
    const formValues = this.userForm.value;
    this.httpClint.post("https://api.freeprojectapi.com/api/GoalTracker/register",formValues).subscribe((res:any)=>{
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
