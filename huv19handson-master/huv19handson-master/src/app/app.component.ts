import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HUv19HandsOn';
  rootName="Ankur28";
  rootItems=['apple','bananas','cherry'];
  onNameChanged(newName){
    this.rootName=newName;
  }

  onItemWasAdded(newitem){
    this.rootItems.push(newitem);
    console.log(this.rootItems);
  }
}
