import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PilihangandaPage } from './pilihanganda.page';

const routes: Routes = [
  {
    path: '',
    component: PilihangandaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PilihangandaPageRoutingModule {}
