import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskRoutingModule } from './task-routing.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { CopyTaskComponent } from './copy-task/copy-task.component';
import { TaskNewListComponent } from './task-new-list/task-new-list.component';
@NgModule({
  imports: [
    SharedModule,
    TaskRoutingModule,
  ],
  declarations: [
    TaskHomeComponent, 
    TaskListComponent, 
    TaskItemComponent,
     TaskHeaderComponent, 
     NewTaskComponent, 
     CopyTaskComponent,
     TaskNewListComponent
    ],
    entryComponents:[
     NewTaskComponent,
     CopyTaskComponent,
     TaskNewListComponent
    ]
})
export class TaskModule { }
