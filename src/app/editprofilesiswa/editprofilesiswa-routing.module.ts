import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditprofilesiswaPage } from './editprofilesiswa.page';

const routes: Routes = [
  {
    path: '',
    component: EditprofilesiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditprofilesiswaPageRoutingModule {}
