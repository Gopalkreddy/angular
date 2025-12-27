import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';


@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.html',
  styleUrl: './get-api.css',
})
export class GetApi {
http = inject(HttpClient);
userList:any[]=[];


    getUsers(){
      this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
        console.log(res);
        this.userList = res;
      }); 
    }

    ngOnInit(){
      this.getUsers();
    }
}
    

