import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditprofileguruPage } from './editprofileguru.page';

const routes: Routes = [
  {
    path: '',
    component: EditprofileguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditprofileguruPageRoutingModule {}
