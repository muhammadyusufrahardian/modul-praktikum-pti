import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahkodemapelPageRoutingModule } from './tambahkodemapel-routing.module';

import { TambahkodemapelPage } from './tambahkodemapel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahkodemapelPageRoutingModule
  ],
  declarations: [TambahkodemapelPage]
})
export class TambahkodemapelPageModule {}
