import { JsonPipe, NgClass, NgStyle } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-att-directive',
  imports: [NgClass,NgStyle,JsonPipe],
  templateUrl: './att-directive.html',
  styleUrl: './att-directive.css',
})
export class AttDirective implements OnInit,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
div1ClassName=signal<string>("");

constructor(){
  console.log("constructor called");
}

ngOnInit(): void {
  console.log("ngOnInit called");
  //totrigger api calls
  // to subscribe 
}
ngAfterContentInit(): void {
  console.log("ngAfterContentInit called");
  
}
ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked called");
}
ngAfterViewInit(): void {
  console.log("ngAfterViewInit called");
  // to view child initilaization
}
ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked called");
}
ngOnDestroy(): void {
  console.log("ngOnDestroy called");
  // to unsubscribe or clean up code before component is destroyed
}

student : object = {
  name : 'Gopal Reddy',
  age  : 33,
  address : 'Hyderabad'
}

div2Color : boolean = false;

setDiv2Color(){
  this.div2Color =!this.div2Color;
}

setBgClass(color:string){
  this.div1ClassName.set(color);  
}
}
