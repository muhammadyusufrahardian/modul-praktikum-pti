import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardsiswaPage } from './dashboardsiswa.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardsiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsiswaPageRoutingModule {}
