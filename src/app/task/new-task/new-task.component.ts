import { Component, OnInit,Output,EventEmitter,Inject,ChangeDetectionStrategy } from '@angular/core';
import { MD_DIALOG_DATA } from '@angular/material'

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class NewTaskComponent implements OnInit {

  @Output() remindTask=new EventEmitter<void>();
  title:"";
  prioritys=[
    {
      lebel:'普通',
      value:1,
    },
    {
      lebel:'重要',
      value:2,
    },
    {
      lebel:'紧急',
      value:3,
    },
      
  ]
  constructor(@Inject(MD_DIALOG_DATA) private data) { }

  ngOnInit() {
    this.remindTask.emit();
    this.title=this.data.title;
  }

}
