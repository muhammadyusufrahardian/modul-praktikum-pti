import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatabarangPage } from '../databarang/databarang.page';
import { AngularFirestore} from '@angular/fire/firestore'
import { AngularFireAuth } from '@angular/fire/auth';
import { Router} from '@angular/router';

@Component({
  selector: 'app-tambahbarang',
  templateUrl: './tambahbarang.page.html',
  styleUrls: ['./tambahbarang.page.scss'],
})
export class TambahbarangPage implements OnInit {

data: any = {};
userData: any={};

  constructor(
    public modalController: ModalController,
    public db: AngularFirestore,
    public auth: AngularFireAuth,
    public router: Router,

    ) { }

  ngOnInit() {
    this.auth
   
    .onAuthStateChanged(user=>{
      this.userData = user;
    })
  }
  async databarang() {
    const modal = await this.modalController.create({
      component: DatabarangPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  loading:boolean;
  simpandata(){
    this.loading = true;
    //menambah atribut author
    this.data.author = this.userData.email;
    var doc = new Date().getTime.toString();
    this.db.collection('databarang').doc(doc).set(this.data).then(res=>{
      this.loading = false;
      alert('data tersimpan');
      this.router.navigate(['/databarang'])
    }).catch(err=> {
      this.loading = false;
      alert('tidak dapat menyimpan data');
    })
  }
}
