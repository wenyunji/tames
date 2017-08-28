import { Component, OnInit,Inject,ChangeDetectionStrategy } from '@angular/core';
import { MD_DIALOG_DATA,MdDialogRef } from '@angular/material'

@Component({
  selector: 'app-task-new-list',
  templateUrl: './task-new-list.component.html',
  styleUrls: ['./task-new-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TaskNewListComponent implements OnInit {

  title:'';
  constructor(@Inject(MD_DIALOG_DATA) private data ,private dialogRef:MdDialogRef<TaskNewListComponent>) { }

  ngOnInit() {
    this.title=this.data.title;
  }
  onclick(){
    this.dialogRef.close(this.title)
  }
}
