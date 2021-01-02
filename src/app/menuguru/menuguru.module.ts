import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuguruPageRoutingModule } from './menuguru-routing.module';

import { MenuguruPage } from './menuguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuguruPageRoutingModule
  ],
  declarations: [MenuguruPage]
})
export class MenuguruPageModule {}
