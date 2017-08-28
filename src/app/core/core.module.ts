import { NgModule,SkipSelf,Optional} from '@angular/core'
import { HttpModule } from '@angular/http';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { locnSvgRegisty } from '../utils/svg.util'
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'rxjs/add/operator/take';
@NgModule({
  imports: [
    HttpModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
       ],
  exports:[
    HeaderComponent, 
    SidebarComponent,
    FooterComponent,
    AppRoutingModule,
  ],
  declarations: [HeaderComponent, SidebarComponent, FooterComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parent:CoreModule,
  ir:MdIconRegistry,ds:DomSanitizer
){
    if(parent){
      throw new Error('模块已经存在，不能再次加载！');
    }
    locnSvgRegisty(ir,ds)
  }
 }
