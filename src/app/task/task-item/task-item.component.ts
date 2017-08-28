import { Component, OnInit,Input,Output,EventEmitter,HostListener,ChangeDetectionStrategy } from '@angular/core';
import { ItemAima } from '../../animate/item.anmate'
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations:[ItemAima ],
  changeDetection:ChangeDetectionStrategy.OnPush
  
  
})
export class TaskItemComponent implements OnInit {

  @Input() item;
  @Input() avatar;
  @Output() itemClick=new EventEmitter<void>();
  itemState="in";
  constructor() { }

  ngOnInit() {
    this.avatar=this.item.owner ? this.item.owner.avatar : "unassigned";
  }
  @HostListener('mouseenter')
  onmouseenter(){
   this.itemState='out'
  }
  @HostListener('mouseleave')
  onmouseleave(){
   this.itemState='in'
  }
  onitemClick(){
    this.itemClick.emit();
  }
  onChckedClick(ev:Event){
    ev.stopPropagation();
  }
}
