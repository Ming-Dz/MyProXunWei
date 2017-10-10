import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {IndexComponent} from './index/index.component';
import {HealthComponent} from './health/health.component';
import {HealthDetailComponent} from './health-detail/health-detail.component';
import {AdminComponent} from './admin/admin.component';


const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'health',
    component: HealthComponent
  },
  {
    path: 'health-detail/:title',
    component: HealthDetailComponent
  },
  {
    path: '',
    redirectTo: '/index',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
