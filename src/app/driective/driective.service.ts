import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
export interface DragData{
  tag:string;
  data:any;
}
@Injectable()
export class DriectiveService {
    private _dragData=new BehaviorSubject<DragData>(null);
    setDragData(data:DragData){
      this._dragData.next(data)
    }
    getDragData():Observable<DragData>{
      return this._dragData.asObservable();
    }
    clearDragData(){
      return this._dragData.next(null);
    }
}
