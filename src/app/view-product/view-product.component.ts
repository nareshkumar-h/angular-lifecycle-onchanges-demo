import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit,OnChanges {

  @Input()
  productName:string;

  constructor() { }

  ngOnInit() {
  }

  /*
  ngOnChanges(changes:SimpleChanges): void {
    console.log('OnChanges - called');
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }

  }*/

  previousValue:string;
  ngOnChanges(changes:SimpleChanges): void {
    console.log('OnChanges - called');
    const name: SimpleChange = changes.productName;
    console.log('Previous value: ', name.previousValue);
    console.log('Current Value: ', name.currentValue);
    this.previousValue = name.previousValue;

  }


}
