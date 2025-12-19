import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  {
    path:'', redirectTo:'home',pathMatch:'full'
  },
  {
    path:'home',component:HeroComponent
  },
  { 
    path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) 
  },
  {
    path:'product',loadChildren:()=> import('./product/product.module').then(m=>m.ProductModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
