import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListstudentComponent } from './liststudent/liststudent.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdatestudentComponent } from './updatestudent/updatestudent.component';
import { MenuComponent } from './menu/menu.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ListstudentComponent,
    AddstudentComponent,
    UpdatestudentComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
