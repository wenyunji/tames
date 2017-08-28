import { Directive,HostListener,ElementRef,Renderer2 ,Input,Output,EventEmitter } from '@angular/core';
import { DriectiveService } from '../driective.service';
@Directive({
  selector: '[app-Drop][dragEnterClass][dragTags]'
})
export class DropDirective {

  @Output() dropped=new EventEmitter<void>();
  @Input() dragEnterClass:string;
  @Input() dragTags:string[]=[];

  private data$;
  constructor(
    private el:ElementRef, 
    private rd:Renderer2, 
    private service:DriectiveService) {
      this.data$=this.service.getDragData().take(1);
     }
  @HostListener('dragenter',['$event'])
    ondragenter(ev:Event){
      ev.preventDefault();
      ev.stopPropagation();
    if(this.el.nativeElement === ev.target){
      this.data$.subscribe(dragData=>{
        if(this.dragTags.indexOf(dragData.tag) >-1 ){
      this.rd.addClass(this.el.nativeElement,this.dragEnterClass);
      }
      })
   } 
  }
  @HostListener('dragleave',['$event'])
  ondragleave(ev:Event){
  ev.preventDefault();
  ev.stopPropagation();
  if(this.el.nativeElement === ev.target){
    this.data$.subscribe(dragData=>{
      if(this.dragTags.indexOf(dragData.tag) >-1 ){
      this.rd.removeClass(this.el.nativeElement,this.dragEnterClass);
      }
    })
  }
  }
  @HostListener('dragover',['$event'])
  ondragover(ev:Event){
    ev.preventDefault();
    ev.stopPropagation();
    if(this.el.nativeElement === ev.target){
      this.data$.subscribe(dragData =>{
        if(this.dragTags.indexOf(dragData.tag) > -1){
       this.rd.setProperty(ev,'dataTransfer.effectAllowed','all')
       this.rd.setProperty(ev,'dataTransfer.dropEffect','move')
        }else{
       this.rd.setProperty(ev,'dataTransfer.effectAllowed','none')
       this.rd.setProperty(ev,'dataTransfer.dropEffect','none')
        }
      })
    } 
  }
  @HostListener('drop',['$event'])
  ondrop(ev:Event){
    ev.preventDefault();
    ev.stopPropagation();
   if(this.el.nativeElement === ev.target){
   this.data$.subscribe(dragData => {
     if(this.dragTags.indexOf(dragData.tag) > -1){
      this.rd.removeClass(this.el.nativeElement,this.dragEnterClass);
      this.dropped.emit(dragData);
      this.service.clearDragData()
     }
   })
   } 
  }
}
