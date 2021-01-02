import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninsiswaPage } from './signinsiswa.page';

const routes: Routes = [
  {
    path: '',
    component: SigninsiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SigninsiswaPageRoutingModule {}
