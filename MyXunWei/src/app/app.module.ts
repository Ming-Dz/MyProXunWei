import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { IndexRotationComponent } from './index/index-rotation/index-rotation.component';
import { HealthComponent } from './health/health.component';
import { HealthDetailComponent } from './health-detail/health-detail.component';
// import { MenuComponent } from './menu/menu.component';
// import { MenuHomeComponent } from './menu/menu-home/menu-home.component';
// import { MenuChinaComponent } from './menu/menu-china/menu-china.component';
// import { MenuForeignComponent } from './menu/menu-foreign/menu-foreign.component';
// import { MenuBakeComponent } from './menu/menu-bake/menu-bake.component';

//导入主路由模块
import {AppRoutingModule} from './app-routing.module';

import {MenuModule} from './menu/menu.module';
import { HealthCommonPipe } from './pipes/health-common.pipe';
import { HealthTabooPipe } from './pipes/health-taboo.pipe';
import { HealthSafetyPipe } from './pipes/health-safety.pipe';
import { HealthStoryPipe } from './pipes/health-story.pipe';
import { HealthTeaPipe } from './pipes/health-tea.pipe';
import { AdminComponent } from './admin/admin.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    IndexRotationComponent,
    HealthComponent,
    HealthDetailComponent,
    HealthCommonPipe,
    HealthTabooPipe,
    HealthSafetyPipe,
    HealthStoryPipe,
    HealthTeaPipe,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MenuModule,
    AppRoutingModule//根路由
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
