import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-detailbarang',
  templateUrl: './detailbarang.page.html',
  styleUrls: ['./detailbarang.page.scss'],
  
})
export class DetailbarangPage implements OnInit {
  taskList = [];
  taskName: string = "";

  constructor(public modalController: ModalController, 
    public navCtrl: NavController,
     public alertController: AlertController) { }
 
  ngOnInit() {
  }
 
}
