import {Component,Input,Output,EventEmitter} from '@angular/core';
@Component({
  selector:'app-user',
  template:`
  <input type="text" (input)=" onUserInput($event)" [value]="name">
  <!--<input type="text" [(ngModel)]="name">-->
  <p>Hello I Am {{name}}</p>
  <p>I am A Linker</p>`

})
export class UserComponent{

  //@Input() name="Ankur";
  @Input() name;
  @Output() nameChanged=new EventEmitter<string>();

  onUserInput(event){
   // this.name=event.target.value;
   this.nameChanged.emit(event.target.value);
  }
};
