import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadtugasguruPage } from './uploadtugasguru.page';

const routes: Routes = [
  {
    path: '',
    component: UploadtugasguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadtugasguruPageRoutingModule {}
