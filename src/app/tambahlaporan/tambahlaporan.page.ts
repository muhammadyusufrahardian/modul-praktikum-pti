import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { AngularFirestore} from '@angular/fire/firestore'
import { AngularFireAuth } from 'angularfire2/auth';
import { Router} from '@angular/router';



@Component({
  selector: 'app-tambahlaporan',
  templateUrl: './tambahlaporan.page.html',
  styleUrls: ['./tambahlaporan.page.scss'],
})
export class TambahlaporanPage implements OnInit {
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
    .auth
    .onAuthStateChanged(user=>{
      this.userData = user;
    })
  }
 

  loading:boolean;
  simpandata(){
    this.loading = true;
    //menambah atribut author
    this.data.author = this.userData.email;
    var doc = new Date().getTime.toString();
    this.db.collection('datalaporan').doc(doc).set(this.data).then(res=>{
      this.loading = false;
      alert('data tersimpan');
      this.router.navigate(['/detaillaporan'])
    }).catch(err=> {
      this.loading = false;
      alert('tidak dapat menyimpan data');
    })
  }
 
  

}
