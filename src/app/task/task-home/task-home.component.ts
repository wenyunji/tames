import { Component, OnInit,HostBinding, ChangeDetectionStrategy,ChangeDetectorRef} from '@angular/core';
import { MdDialog } from '@angular/material';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ShareDialogComponent } from '../../shared/share-dialog/share-dialog.component';
import { TaskNewListComponent } from '../task-new-list/task-new-list.component';
import { RoutingAima } from '../../animate/routing.animat'
@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations:[RoutingAima ],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routing') state;
  lists=[
    {
      id:1,
      name:"待办",
      tasks:[
        {
          id:1,
          desc:"任务一：去小卖部买点东西",
          completed:false,
          priority:1,
          owner:{
            id:1,
            name:"李四",
            avatar:"avatars:svg-1"
         },
         dueDate:new Date(),
        },
        {
          id:2,
          desc:"任务二：去小卖部买点东西",
          completed:false,
          priority:2,
          owner:{
            id:2,
            name:"李四",
            avatar:"avatars:svg-11"
         },
         dueDate:new Date(),
        }
      ]
     },
     {
      id:2,
      name:"进行中",
      tasks:[
        {
          id:1,
          desc:"任务一：去小卖部买点东西",
          completed:false,
          priority:3,
            owner:{
            id:1,
            name:"李四",
            avatar:"avatars:svg-1"
         },
         dueDate:new Date(),
        },
        {
          id:2,
          desc:"任务二：去小卖部买点东西",
          completed:true,
          priority:2,
          owner:{
            id:2,
            name:"李四",
            avatar:"avatars:svg-10"
         },
         dueDate:new Date(),
        }
      ]
     },
     {
      id:3,
      name:"已完成",
    
      tasks:[
        {
          id:1,
          desc:"任务一：去小卖部买点东西",
          completed:true,
          priority:2,
           owner:{
            id:1,
            name:"李四",
            avatar:"avatars:svg-1"
         },
         dueDate:new Date(),
        },
        {
          id:2,
          desc:"任务二：去小卖部买点东西",
          completed:true,
          priority:1,
          owner:{
            id:2,
            name:"李四",
            avatar:"avatars:svg-10"
         },
         dueDate:new Date(),
        }
      ]
     },
     
   
  ]
  constructor(private dialog:MdDialog ,private cd:ChangeDetectorRef) { }

  ngOnInit() {
  }
   remianNewTask(task){
  this.dialog.open(NewTaskComponent,{data:{title:'新建任务',task:task}})
  }
  remianCopyTask(){
  const dialogRef=this.dialog.open(CopyTaskComponent,{data:{lists:this.lists}})
  }
  remianItemTask(task){
  this.dialog.open(NewTaskComponent,{data:{title:'修改任务',task:task}})
  }
  remianDeleteDialog(){
  const dialogRef=this.dialog.open(ShareDialogComponent,{data:{title:'删除列表',content:'您确定删除本列表吗？'}});
  dialogRef.afterClosed().subscribe(result => console.log(result))
  }
  remianAmendDialog(){
  const dialogRef=this.dialog.open(TaskNewListComponent,{data:{title:'修改名称'}});
  dialogRef.afterClosed().subscribe(result => console.log(result))  
  }
  openNewProjectDialog(){
  const dialogRef=this.dialog.open(TaskNewListComponent,{data:{title:'新建任务'}});
  dialogRef.afterClosed().subscribe(result => console.log(result))  
  }

  handleMove(srcData,list){
    switch(srcData.tag){
      case 'task-item':
      console.log('handleing item')
      case 'task-list':
      console.log('handleing list')
    }
  }
}
