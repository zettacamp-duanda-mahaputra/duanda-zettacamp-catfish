import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/Homepage', pathMatch: 'full' },
  { path: 'Homepage', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule) },
  { path: 'About', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'Cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'Login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'Menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
  { path: 'MenuManagement', loadChildren: () => import('./menu-management/menu-management.module').then(m => m.MenuManagementModule) },
  { path: 'StockManagement', loadChildren: () => import('./stock-management/stock-management.module').then(m => m.StockManagementModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
