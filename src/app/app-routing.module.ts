import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'entrega-oxigem',
    loadChildren: () => import('./paginasInternas/entrega-oxigem/entrega-oxigem.module').then( m => m.EntregaOxigemPageModule)
  },
  {
    path: 'recoger-oxigem',
    loadChildren: () => import('./paginasInternas/recoger-oxigem/recoger-oxigem.module').then( m => m.RecogerOxigemPageModule)
  },
  {
    path: 'menu-principal',
    loadChildren: () => import('./paginasInternas/menu-principal/menu-principal.module').then( m => m.MenuPrincipalPageModule)
  },
  {
    path: 'escaneo-qr-oxigem',
    loadChildren: () => import('./paginasInternas/escaneo-qr-oxigem/escaneo-qr-oxigem.module').then( m => m.EscaneoQrOxigemPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
