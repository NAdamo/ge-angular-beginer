import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {TestComponent} from './test/test.component';
import { TestCliComponent } from './test-cli/test-cli.component';
import { CounterComponent } from './counter/counter.component';
import { CounterListComponent } from './counter-list/counter-list.component';
import { CourseFormComponent } from './course-form/course-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestCliComponent,
    CounterComponent,
    CounterListComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
