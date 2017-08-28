import { Component, OnInit,ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DialogComponent implements OnInit {
  
 items=[
   {
     id:1,
     name:"wenyunji"
  },
  {
    id:2,
    name:"wenqing"
 },
 {
  id:3,
  name:"sj5681688"
}
 ]
  constructor() { }

  ngOnInit() {
  }
  displayUser(user:{id:string,name:string}){
    return user ? user.name :"";
  }
}
