import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetaillaporanbarangPage } from './detaillaporanbarang.page';

const routes: Routes = [
  {
    path: '',
    component: DetaillaporanbarangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaillaporanbarangPageRoutingModule {}
