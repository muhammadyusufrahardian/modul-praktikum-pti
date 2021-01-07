import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailbarangPage } from '../detailbarang/detailbarang.page';
import { DetaillaporanPage } from '../detaillaporan/detaillaporan.page';

@Component({
  selector: 'app-detaillaporanbarang',
  templateUrl: './detaillaporanbarang.page.html',
  styleUrls: ['./detaillaporanbarang.page.scss'],
})
export class DetaillaporanbarangPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  
}
