# Angular Lifecycle - OnChanges


#### app.component.html
```
<h3>Angular - Lifecycle - change</h3>

<h3>List Products</h3>
Select Product: 
<select [(ngModel)]="selectedProduct" name="selectedProduct" >
<option *ngFor="let productName of products" value="{{productName}}">{{productName}}</option>
</select>
<span *ngIf="selectedProduct">
  <app-view-product [productName]="selectedProduct"></app-view-product>
</span>

```

#### viewproduct.component.html
```
<h3>View Product (Child Component)</h3>
Current Value: {{productName}}
<br/>
Previous Value: {{previousValue}}
```

#### viewproduct.component.ts
```
export class ViewProductComponent implements OnInit,OnChanges {

  @Input()
  productName:string;

  constructor() { }

  ngOnInit() {
  }

  previousValue:string;
  
  ngOnChanges(changes:SimpleChanges): void {
    console.log('OnChanges - called');
    const name: SimpleChange = changes.productName;
    console.log('Previous value: ', name.previousValue);
    console.log('Current Value: ', name.currentValue);
    this.previousValue = name.previousValue;

  }


}
```
