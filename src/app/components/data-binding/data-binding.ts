import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
title: string = 'Data Binding in Angular';
maxlength: number = 5;
myClassName: string = ' colorClass';

changeTitle() {
  this.title = 'Title Changed!';
}
changeCity(){
  alert('City Changed!');
}
}