import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Router} from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from '@ionic/angular';
import { WelcomePage } from '../welcome/welcome.page';

@Component({
  selector: 'app-signinsiswa',
  templateUrl: './signinsiswa.page.html',
  styleUrls: ['./signinsiswa.page.scss'],
})
export class SigninsiswaPage implements OnInit {

  constructor(
    public router: Router,
    public modalController: ModalController,
    public auth: AngularFireAuth,
    public alertController: AlertController,
    public modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }
  email:any;
  password:any;
  loading: boolean;
  masuk(){
    this.auth
    .auth
    .signInWithEmailAndPassword(this.email, this.password)
    .then(value => {
     this.router.navigate(['/dashboardsiswa']);
    })
    .catch(err => {
      this.presentAlert()
    });
  }
  selectedSegment:any = 'login';

  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ups!',
     
      message: 'Password/Username tidak terdaftar!',
      buttons: ['OK']
    });

    await alert.present();
  }

  async back() {
    const modal = await this.modalCtrl.create({
      component: WelcomePage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
}
