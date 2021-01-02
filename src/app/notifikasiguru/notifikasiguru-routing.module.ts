import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotifikasiguruPage } from './notifikasiguru.page';

const routes: Routes = [
  {
    path: '',
    component: NotifikasiguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotifikasiguruPageRoutingModule {}
