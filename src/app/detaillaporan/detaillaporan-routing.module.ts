import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetaillaporanPage } from './detaillaporan.page';

const routes: Routes = [
  {
    path: '',
    component: DetaillaporanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaillaporanPageRoutingModule {}
