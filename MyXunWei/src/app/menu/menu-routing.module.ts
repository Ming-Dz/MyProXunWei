import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MenuComponent} from './menu.component';
import {MenuHomeComponent} from './menu-home/menu-home.component';
import {MenuChinaComponent} from './menu-china/menu-china.component';
import {MenuForeignComponent} from './menu-foreign/menu-foreign.component';
import {MenuBakeComponent} from './menu-bake/menu-bake.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      {
        path: 'menu-home',
        component: MenuHomeComponent
      },
      {
        path: 'menu-china',
        component: MenuChinaComponent
      },
      {
        path: 'menu-foreign',
        component: MenuForeignComponent
      }, {
        path: 'menu-bake',
        component: MenuBakeComponent
      },
      {
        path: '',
        component: MenuHomeComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {
}
