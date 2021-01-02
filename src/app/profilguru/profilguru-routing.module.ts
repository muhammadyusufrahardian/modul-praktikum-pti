import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilguruPage } from './profilguru.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilguruPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilguruPageRoutingModule {}
