import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JadwalguruPage } from './jadwalguru.page';

const routes: Routes = [
  {
    path: '',
    component: JadwalguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JadwalguruPageRoutingModule {}
