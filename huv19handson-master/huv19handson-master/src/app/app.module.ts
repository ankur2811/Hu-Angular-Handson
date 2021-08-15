import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserComponent} from './user.component';
import {FormsModule} from '@angular/forms'
import { DashboardComponent } from './dashboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { CartcomponentComponent } from './cartcomponent/cartcomponent.component';
import { TestingComponent } from './testing/testing.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashboardComponent,
    UserDetailComponent,
    CartcomponentComponent,
    TestingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
