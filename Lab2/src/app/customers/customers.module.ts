import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerComponent } from './customer/customer.component';
import { ApiConfig } from '../apiConfig';
import { apiconfigvalue } from '../apiConfig.value';


export const configValue: ApiConfig={
  EndPoint:'customer.module.com',
  Token:'CustomerModuleToken'
}
@NgModule({
  declarations: [CustomersComponent, CustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  providers: [
    {provide:apiconfigvalue,useValue:configValue}
  ],
  exports:[CustomersComponent]
})
export class CustomersModule { }
