import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'counterApp';
  messageMax: string = 'Max count is 10';
  messageMin: string = 'Min count is 0';
  count: number = 0;

  handleIncrease = () => {
    if(this.count === 10){
      this.count = 0
      alert(this.messageMax);
    }
    this.count = this.count+1;
  };

  handleDecrease = () => {
    if(this.count === 0){
      this.count = 1
      alert(this.messageMin);
    }
    this.count = this.count - 1;
  };

  handleReset = () => {
    this.count = 0;
  };



}
