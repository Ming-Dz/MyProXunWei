import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


//组件
import {AppComponent} from './app.component';
import {AdminComponent} from './admin/admin.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {IndexComponent} from './index/index.component';
import {IndexRotationComponent} from './index/index-rotation/index-rotation.component';
import {HealthComponent} from './health/health.component';
import {HealthDetailComponent} from './health-detail/health-detail.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

//导入主路由模块
import {AppRoutingModule} from './app-routing.module';

//子路由模块
import {MenuModule} from './menu/menu.module';

//服务
import {GlobalPropertyService} from './services/global-property.service';
import {LocalStorage} from './services/localStorage.service';

//管道
import {HealthCommonPipe} from './pipes/health-common.pipe';
import {HealthTabooPipe} from './pipes/health-taboo.pipe';
import {HealthSafetyPipe} from './pipes/health-safety.pipe';
import {HealthStoryPipe} from './pipes/health-story.pipe';
import {HealthTeaPipe} from './pipes/health-tea.pipe';


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
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MenuModule,
    AppRoutingModule//根路由
  ],
  providers: [GlobalPropertyService, LocalStorage],
  bootstrap: [AppComponent]
})
export class AppModule {
}
