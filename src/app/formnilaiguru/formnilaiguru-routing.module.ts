import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormnilaiguruPage } from './formnilaiguru.page';

const routes: Routes = [
  {
    path: '',
    component: FormnilaiguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormnilaiguruPageRoutingModule {}
