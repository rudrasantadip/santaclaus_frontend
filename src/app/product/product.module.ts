import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
