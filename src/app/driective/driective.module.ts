import { NgModule } from '@angular/core';
import { DragDirective } from './drag-drop/drag.directive';
//import { DropDirective } from './drag-drop/drop.directive';
import { DriectiveService } from './driective.service';
@NgModule({

  declarations: [
    DragDirective, 
   // DropDirective
  ],
  exports:[
    DragDirective, 
   // DropDirective
  ],
  providers:[
    DriectiveService
  ]
})
export class DriectiveModule { }
