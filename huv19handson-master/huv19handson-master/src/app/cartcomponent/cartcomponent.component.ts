import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-cartcomponent',
  templateUrl: './cartcomponent.component.html',
  styleUrls: ['./cartcomponent.component.scss']
})
export class CartcomponentComponent implements OnInit {
@Input() items=[];
newItem="";
@Output() itemAdded=new EventEmitter<string>();
onAddItem(){
  this.itemAdded.emit(this.newItem);
}
  constructor() { }

  ngOnInit(): void {
  }

}
