import { Component, OnInit } from '@angular/core';
import { LogSService } from 'src/app/log-s.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  message!:string;
  constructor(private logs:LogSService ) { }
  apiDetails!:any;
  ngOnInit(): void {
    this.message=this.logs.logData("This is Product component of eagerly loaded Module")
    this.apiDetails=this.logs.getApiDetails();
  }

}
