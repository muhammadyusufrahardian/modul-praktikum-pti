import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilguruPageRoutingModule } from './profilguru-routing.module';

import { ProfilguruPage } from './profilguru.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilguruPageRoutingModule
  ],
  declarations: [ProfilguruPage]
})
export class ProfilguruPageModule {}
