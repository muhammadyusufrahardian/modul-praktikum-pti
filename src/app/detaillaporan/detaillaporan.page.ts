import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetaillaporanbarangPage } from '../detaillaporanbarang/detaillaporanbarang.page';
import { LaporanPage } from '../laporan/laporan.page';
import { TambahbarangPage } from '../tambahbarang/tambahbarang.page';
import { TambahlaporanPage } from '../tambahlaporan/tambahlaporan.page';

@Component({
  selector: 'app-detaillaporan',
  templateUrl: './detaillaporan.page.html',
  styleUrls: ['./detaillaporan.page.scss'],
})
export class DetaillaporanPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async laporan() {
    const modal = await this.modalController.create({
      component:LaporanPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  
}
