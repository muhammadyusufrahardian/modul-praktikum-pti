import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenusiswaPageRoutingModule } from './menusiswa-routing.module';

import { MenusiswaPage } from './menusiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenusiswaPageRoutingModule
  ],
  declarations: [MenusiswaPage]
})
export class MenusiswaPageModule {}
