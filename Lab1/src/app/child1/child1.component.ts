import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  @Output() changeEvent = new EventEmitter();
  @Output() changeEventByViewChild=new EventEmitter();
  constructor() { }
  changeState(){
    this.changeEvent.emit();
  }
  changeStateByViewChild(){
this.changeEventByViewChild.emit();
  }
  ngOnInit(): void {
  }

}
