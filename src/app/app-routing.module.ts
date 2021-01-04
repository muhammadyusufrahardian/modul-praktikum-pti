import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'halamanutama',
    loadChildren: () => import('./halamanutama/halamanutama.module').then( m => m.HalamanutamaPageModule)
  },
  {
    path: 'pilih',
    loadChildren: () => import('./pilih/pilih.module').then( m => m.PilihPageModule)
  },
  {
    path: 'cari',
    loadChildren: () => import('./cari/cari.module').then( m => m.CariPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules,scrollPositionRestoration: 'enabled' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
