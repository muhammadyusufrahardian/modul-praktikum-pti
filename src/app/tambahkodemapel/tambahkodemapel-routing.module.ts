import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahkodemapelPage } from './tambahkodemapel.page';

const routes: Routes = [
  {
    path: '',
    component: TambahkodemapelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahkodemapelPageRoutingModule {}
