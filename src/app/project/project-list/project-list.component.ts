import { Component, OnInit,HostBinding,ChangeDetectionStrategy,ChangeDetectorRef} from '@angular/core';
import { MdDialogModule,MdDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { DialogComponent } from '../dialog/dialog.component';
import { ShareDialogComponent } from '../../shared/share-dialog/share-dialog.component';
import { RoutingAima } from '../../animate/routing.animat';
import { ListAima } from '../../animate/list.animate';
@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations:[ RoutingAima,ListAima ],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routing') state
  projects=[
    {
      "id":1,
      "name":"企业协作平台",
      "desc":"这是一个练习项目",
      "coverImg":"assets/img/covers/3.jpg",
    },
    {
      "id":2,
      "name":"企业协作平台",
      "desc":"这是一个练习项目",
      "coverImg":"assets/img/covers/4.jpg",
    }
  ]
  constructor(private dialog:MdDialog ,private cd:ChangeDetectorRef) { }
 
  ngOnInit() {
  }
  openNewProjectDialog(){
   const dialogRef=this.dialog.open(NewProjectComponent,{data:{title:'新建项目'}});
   dialogRef.afterClosed().subscribe(result =>{ 
     console.log(result);
     this.projects=[...this.projects,
      {id:3,name:'一个新项目',desc:'这是一个项目管理案例',coverImg:'assets/img/covers/9.jpg'},
      {id:4,name:'又一个新项目',desc:'这是一个项目管理案例',coverImg:'assets/img/covers/10.jpg'},]
      this.cd.markForCheck();
  });
  }
  launchInvte(){
  const dialogRef=this.dialog.open(DialogComponent);
  }
  launchEdit(){
  const dialogRef=this.dialog.open(NewProjectComponent,{data:{title:'编辑项目'}});
  }
  launchDelete(project){
  const dialogRef=this.dialog.open(ShareDialogComponent,{data:{title:'删除项目',content:'您确定要删除本项目吗？'}});
  dialogRef.afterClosed().subscribe(result => {
    console.log(result);
    this.projects=this.projects.filter(p => p.id != project.id);
    this.cd.markForCheck();
  });
  }
}
