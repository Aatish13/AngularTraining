import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Child2Component } from './child2/child2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  ngOnInit(): void {
   
  }
  ngAfterViewInit(): void {
    console.log(this.child2)
  }
  title = 'Lab 1';
  IsBtnDisabled=false;

  @ViewChild('child2n')
  child2!: Child2Component;
  
  changeBtnState(){
    this.IsBtnDisabled=!this.IsBtnDisabled;
  }
  
  changeBtnStateByViewChild(){
    console.log("In change by ViewChild")
    this.child2.IsBtnDisabledByViewChild=!this.child2.IsBtnDisabledByViewChild;
    console.log(this.child2)
  }


}
