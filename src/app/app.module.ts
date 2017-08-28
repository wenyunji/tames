import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginModule } from './login/login.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ProjectModule } from './project/project.module';
import { TaskModule } from './task/task.module';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [
    AppComponent,
     ],
  imports: [
    BrowserModule,
    CoreModule,
    LoginModule,
    ProjectModule,
    SharedModule,
    TaskModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
