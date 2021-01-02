import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupsiswaPage } from './signupsiswa.page';

const routes: Routes = [
  {
    path: '',
    component: SignupsiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupsiswaPageRoutingModule {}
