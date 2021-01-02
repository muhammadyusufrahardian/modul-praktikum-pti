import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TugassiswaPage } from './tugassiswa.page';

const routes: Routes = [
  {
    path: '',
    component: TugassiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TugassiswaPageRoutingModule {}
