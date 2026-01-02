import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Master } from '../../services/master';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  masterService = inject(Master);

  loginObj:any={
    username:'',
    password:''
  }

  router = inject(Router);
  http = inject(HttpClient);

  login(){

    this.http.post("https://api.freeprojectapi.com/api/GoalTracker/login",{emailId:this.loginObj.username,password:this.loginObj.password}).subscribe((res:any)=>{
      console.log(res);
      if (res && typeof res === 'object' && res.userId) {
      localStorage.setItem('userName', res.fullName);
      localStorage.setItem('userId', res.userId);
      this.masterService.onLogin.next(true);
      this.router.navigate(['/admin']);
    }else if (typeof res === 'string') {
      alert(res); // "Invalid email or password"
    }
    else {
      alert('Login failed');
    }
    },
  (error) => {
    if (error.status === 401) {
      alert(error.error || 'Invalid email or password');
    }
  });

// hard cdoded login logic
    // if(this.loginObj.username=='admin' && this.loginObj.password=='admin123'){
    //     //alert('Login Successful');
    //     localStorage.setItem('userName','admin');
    //     this.masterService.onLogin.next(true);
    //     this.router.navigate(['/admin']);
    // }else{
    //   alert('Invalid Credentials');
    // }


  }
}
