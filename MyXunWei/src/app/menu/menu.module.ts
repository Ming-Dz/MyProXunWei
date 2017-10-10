import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MenuComponent } from './menu.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { MenuChinaComponent } from './menu-china/menu-china.component';
import { MenuForeignComponent } from './menu-foreign/menu-foreign.component';
import { MenuBakeComponent } from './menu-bake/menu-bake.component';

//导入路由模块
import {MenuRoutingModule} from './menu-routing.module';
@NgModule({
  declarations: [
    MenuComponent,
    MenuHomeComponent,
    MenuChinaComponent,
    MenuForeignComponent,
    MenuBakeComponent
  ],
  imports: [
    BrowserModule,
    MenuRoutingModule,
  ],
  providers: [],
  bootstrap: [MenuComponent]
})
export class MenuModule { }
