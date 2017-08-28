import { Component, OnInit,Inject } from '@angular/core';
import { MdDialogRef ,MD_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-share-dialog',
  template: `
  <form>
  <h3 md-dialog-title>{{title}}</h3>
  <div md-dialog-content>
    {{content}}
  </div>
  <div md-dialog-actions>
    <button type="button"  md-raised-button color="warn" (click)="onclick(true)">确定</button>
    <button type="button"  md-raised-close md-button (click)="onclick(false)">取消</button>
  </div>
</form>
  `,
  styles: []
})
export class ShareDialogComponent implements OnInit {

  title:'';
  content:'';
  constructor(@Inject(MD_DIALOG_DATA) private data ,private dialogRef:MdDialogRef<ShareDialogComponent>) { }

  ngOnInit() {
    this.title=this.data.title;
    this.content=this.data.content;
  }
  onclick(result:boolean){
    this.dialogRef.close(result)
  }

}
