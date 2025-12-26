import { NgClass, NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass,NgStyle],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective {
div1ClassName=signal<string>("");

div2Color : boolean = false;

setDiv2Color(){
  this.div2Color =!this.div2Color;
}

setBgClass(color:string){
  this.div1ClassName.set(color);  
}
}
