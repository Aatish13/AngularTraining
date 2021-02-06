import { Component, OnInit } from '@angular/core';
import { LogSService } from '../log-s.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  apiDetails!:any;
  message!:string;
  constructor(private logs:LogSService) {

   }

  ngOnInit(): void {
  this.message=this.logs.logData("This is Customer Component of leazy Module")
  this.apiDetails=this.logs.getApiDetails();
  }

}
