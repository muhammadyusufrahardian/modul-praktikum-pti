import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadtugassiswaPage } from './uploadtugassiswa.page';

const routes: Routes = [
  {
    path: '',
    component: UploadtugassiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadtugassiswaPageRoutingModule {}
