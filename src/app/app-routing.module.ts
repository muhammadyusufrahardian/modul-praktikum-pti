import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'dashboardsiswa',
    loadChildren: () => import('./dashboardsiswa/dashboardsiswa.module').then( m => m.DashboardsiswaPageModule)
  },
  {
    path: 'editprofileguru',
    loadChildren: () => import('./editprofileguru/editprofileguru.module').then( m => m.EditprofileguruPageModule)
  },
  {
    path: 'editprofilesiswa',
    loadChildren: () => import('./editprofilesiswa/editprofilesiswa.module').then( m => m.EditprofilesiswaPageModule)
  },
  {
    path: 'formnilaiguru',
    loadChildren: () => import('./formnilaiguru/formnilaiguru.module').then( m => m.FormnilaiguruPageModule)
  },
  {
    path: 'formtugasguru',
    loadChildren: () => import('./formtugasguru/formtugasguru.module').then( m => m.FormtugasguruPageModule)
  },
  {
    path: 'jadwalguru',
    loadChildren: () => import('./jadwalguru/jadwalguru.module').then( m => m.JadwalguruPageModule)
  },
  {
    path: 'jadwasiswa',
    loadChildren: () => import('./jadwasiswa/jadwasiswa.module').then( m => m.JadwasiswaPageModule)
  },
  {
    path: 'kelas',
    loadChildren: () => import('./kelas/kelas.module').then( m => m.KelasPageModule)
  },
  {
    path: 'kelassiswa',
    loadChildren: () => import('./kelassiswa/kelassiswa.module').then( m => m.KelassiswaPageModule)
  },
  {
    path: 'laporannilai',
    loadChildren: () => import('./laporannilai/laporannilai.module').then( m => m.LaporannilaiPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loginsiswa',
    loadChildren: () => import('./loginsiswa/loginsiswa.module').then( m => m.LoginsiswaPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'materi',
    loadChildren: () => import('./materi/materi.module').then( m => m.MateriPageModule)
  },
  {
    path: 'menuguru',
    loadChildren: () => import('./menuguru/menuguru.module').then( m => m.MenuguruPageModule)
  },
  {
    path: 'menusiswa',
    loadChildren: () => import('./menusiswa/menusiswa.module').then( m => m.MenusiswaPageModule)
  },
  {
    path: 'notifikasiguru',
    loadChildren: () => import('./notifikasiguru/notifikasiguru.module').then( m => m.NotifikasiguruPageModule)
  },
  {
    path: 'pilihanganda',
    loadChildren: () => import('./pilihanganda/pilihanganda.module').then( m => m.PilihangandaPageModule)
  },
  {
    path: 'profilguru',
    loadChildren: () => import('./profilguru/profilguru.module').then( m => m.ProfilguruPageModule)
  },
  {
    path: 'profilsiswa',
    loadChildren: () => import('./profilsiswa/profilsiswa.module').then( m => m.ProfilsiswaPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sigin',
    loadChildren: () => import('./sigin/sigin.module').then( m => m.SiginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'signupsiswa',
    loadChildren: () => import('./signupsiswa/signupsiswa.module').then( m => m.SignupsiswaPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tambahkodemapel',
    loadChildren: () => import('./tambahkodemapel/tambahkodemapel.module').then( m => m.TambahkodemapelPageModule)
  },
  {
    path: 'tugasguru',
    loadChildren: () => import('./tugasguru/tugasguru.module').then( m => m.TugasguruPageModule)
  },
  {
    path: 'tugassiswa',
    loadChildren: () => import('./tugassiswa/tugassiswa.module').then( m => m.TugassiswaPageModule)
  },
  {
    path: 'uploadtugasguru',
    loadChildren: () => import('./uploadtugasguru/uploadtugasguru.module').then( m => m.UploadtugasguruPageModule)
  },
  {
    path: 'uploadtugassiswa',
    loadChildren: () => import('./uploadtugassiswa/uploadtugassiswa.module').then( m => m.UploadtugassiswaPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'pilihangandasiswa',
    loadChildren: () => import('./pilihangandasiswa/pilihangandasiswa.module').then( m => m.PilihangandasiswaPageModule)
  },
  {
    path: 'signinsiswa',
    loadChildren: () => import('./signinsiswa/signinsiswa.module').then( m => m.SigninsiswaPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
