import { Component, OnInit,Input,Output,EventEmitter,HostBinding,HostListener,ChangeDetectionStrategy} from '@angular/core';
import { CardAima } from '../../animate/crad.animate';
@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations:[ CardAima],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProjectItemComponent implements OnInit {

  @Input() item;
  @Output() invteDialog=new EventEmitter<void>();
  @Output() editDialog=new EventEmitter<void>();
  @Output() deleteDialog=new EventEmitter<void>();
  @HostBinding('@card') cardState='out';
  constructor() { }

  ngOnInit() {
  }
  @HostListener('mouseenter')
  onmouseenter(){
    this.cardState="hover"
  }
  @HostListener('mouseleave')
  onmouseleave(){
    this.cardState="out"
  }
  onInviteClick(){
    this.invteDialog.emit();
  }
  onEditClick(){
    this.editDialog.emit();
  }
  onDeleteClick(){
    this.deleteDialog.emit();
  }
}
