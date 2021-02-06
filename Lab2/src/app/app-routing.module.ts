import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products/product/product.component';

const routes: Routes = [{ path: 'Customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }, 
{ path: 'Orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
{path:'Products',component:ProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
