import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilsiswaPage } from './profilsiswa.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilsiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilsiswaPageRoutingModule {}
