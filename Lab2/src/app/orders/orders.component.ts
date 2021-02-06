import { Component, OnInit } from '@angular/core';
import { LogSService } from '../log-s.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  apiDetails!:any;
  message!:string;
  constructor(private logs:LogSService) {

   }

  ngOnInit(): void {
  this.message=this.logs.logData("This is Orders Component of leazy Module")
  this.apiDetails=this.logs.getApiDetails();
  }

}
