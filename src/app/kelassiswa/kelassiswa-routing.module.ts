import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KelassiswaPage } from './kelassiswa.page';

const routes: Routes = [
  {
    path: '',
    component: KelassiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KelassiswaPageRoutingModule {}
