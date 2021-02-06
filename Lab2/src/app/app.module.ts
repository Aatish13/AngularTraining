import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiConfig } from './apiConfig';
import { apiconfigvalue } from './apiConfig.value';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

export const configValue: ApiConfig={
  EndPoint:'app.module.com',
  Token:'AppModuleToken'
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [CustomersModule,
    OrdersModule,
    ProductsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide:apiconfigvalue,useValue:configValue}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
