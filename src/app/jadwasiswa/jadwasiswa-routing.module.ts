import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadwasiswaPage } from './jadwasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: JadwasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadwasiswaPageRoutingModule {}
