import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginsiswaPage } from './loginsiswa.page';

const routes: Routes = [
  {
    path: '',
    component: LoginsiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginsiswaPageRoutingModule {}
