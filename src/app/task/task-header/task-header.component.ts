import { Component, OnInit,Input,Output,EventEmitter,ChangeDetectionStrategy  } from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush

})
export class TaskHeaderComponent implements OnInit {

  @Input() header:'';
  @Output() remindTask=new EventEmitter<void>();
  @Output() copyTask=new EventEmitter<void>();
  @Output() deleteDialog=new EventEmitter<void>();
  @Output() amendDialog=new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
   }
   OnNewClickTask(){
     this.remindTask.emit();
        }
   onCopyDialogClick(){
    this.copyTask.emit();
   }
   onDeleteDialogClick(){
     this.deleteDialog.emit();
   }
   onAmendDialogClick(){
     this.amendDialog.emit();
   }
}
