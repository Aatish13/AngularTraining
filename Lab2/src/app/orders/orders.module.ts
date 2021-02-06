import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { OrderComponent } from './order/order.component';
import { ApiConfig } from '../apiConfig';
import { apiconfigvalue } from '../apiConfig.value';


export const configValue: ApiConfig={
  EndPoint:'orders.module.com',
  Token:'OrdersModuleToken'
}
@NgModule({
  declarations: [OrdersComponent, OrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  providers: [
    {provide:apiconfigvalue,useValue:configValue}
  ],
  exports:[OrdersComponent]
})
export class OrdersModule { }
