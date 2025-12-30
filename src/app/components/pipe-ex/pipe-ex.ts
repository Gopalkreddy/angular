import { DatePipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { NaPipe } from '../../pipe/na-pipe';

@Component({
  selector: 'app-pipe-ex',
  imports: [UpperCasePipe,LowerCasePipe,TitleCasePipe,SlicePipe,DatePipe,JsonPipe,NaPipe],
  templateUrl: './pipe-ex.html',
  styleUrl: './pipe-ex.css',
})
export class PipeEx {

  coursename: string = 'angular';
  todaydate: Date = new Date();

  studentObject = {
    firstName: 'gopal',
    lastName: 'reddy',
    email:''
  };

  fruits: string[] = ['banana', 'apple', 'mango', 'orange', 'grapes', 'pineapple'];

}
