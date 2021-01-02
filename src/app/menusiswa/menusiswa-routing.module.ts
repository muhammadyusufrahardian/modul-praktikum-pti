import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenusiswaPage } from './menusiswa.page';

const routes: Routes = [
  {
    path: '',
    component: MenusiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenusiswaPageRoutingModule {}
