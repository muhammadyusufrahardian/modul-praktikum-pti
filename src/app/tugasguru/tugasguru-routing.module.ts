import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TugasguruPage } from './tugasguru.page';

const routes: Routes = [
  {
    path: '',
    component: TugasguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TugasguruPageRoutingModule {}
