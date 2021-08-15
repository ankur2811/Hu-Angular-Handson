import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingComponent } from './testing.component';
import {TestService} from './testing.service'


describe('TestingComponent', () => {
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations:[TestingComponent]
    });
  })


it('should create the app',()=>{
  let fixture=TestBed.createComponent(TestingComponent);
  let app=fixture.debugElement.componentInstance;
  expect(app).toBeTruthy();
});

it('should use the username from service',()=>{
  let fixture=TestBed.createComponent(TestingComponent);
  let app=fixture.debugElement.componentInstance;
  let testService=fixture.debugElement.injector.get(TestService);
  fixture.detectChanges();
  expect(testService.user.name).toEqual(app.user.name);
});

it('should display the username when user is logged in',()=>{
  let fixture=TestBed.createComponent(TestingComponent);
  let app=fixture.debugElement.componentInstance;
  fixture.detectChanges();
  //let testService=fixture.debugElement.injector.get(TestService);
  app.isLoggedIn=true;
  let compiled=fixture.debugElement.nativeElement;
  expect(compiled.querySelector('p').textContent).toContain(app.user.name);
})


});
