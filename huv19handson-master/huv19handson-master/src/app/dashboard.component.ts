import {Component} from '@angular/core';
@Component({
  selector:'app-dashboard',
  template:`
  <p>Hello I am DashBoard Component</p>
  <!--<p>{{loadState}}</p>-->
  <p [textContent]="loadState"></p>
  <button (click)="onSwitchState()">Switch State</button>
  <!--<input type="text" (input)="loadState=$event.target.value">-->
  <input type="text" [(ngModel)]="loadState">
 `

})
export class DashboardComponent{
  loadState="loading";

  onSwitchState(){
    this.loadState='finished';
  }
};
