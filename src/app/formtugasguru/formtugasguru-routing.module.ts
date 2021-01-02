import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormtugasguruPage } from './formtugasguru.page';

const routes: Routes = [
  {
    path: '',
    component: FormtugasguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormtugasguruPageRoutingModule {}
