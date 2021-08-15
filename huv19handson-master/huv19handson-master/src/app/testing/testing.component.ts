import { Component, OnInit } from '@angular/core';
import {TestService} from './testing.service'

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss'],
  providers:[TestService]
})
export class TestingComponent implements OnInit {
 user:{name:string};
 isLoggedIn=false;
  constructor(private testingService:TestService) { }

  ngOnInit(): void {
    this.user=this.testingService.user;
  }

}
