import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-contrl-flow',
  imports: [FormsModule,NgStyle],
  templateUrl: './contrl-flow.html',
  styleUrl: './contrl-flow.css',
})
export class ContrlFlow {
showParagraph = true;
startMonthName = 'March';
months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

  hideParagraph() {
    this.showParagraph = false;   
  }
}