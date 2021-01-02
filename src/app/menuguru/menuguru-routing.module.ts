import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuguruPage } from './menuguru.page';

const routes: Routes = [
  {
    path: '',
    component: MenuguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuguruPageRoutingModule {}
