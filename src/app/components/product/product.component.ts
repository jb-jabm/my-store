import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../../product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product ={
     id:'',
      price: 0,
      images:[],
      title:'',
      category:{
        id: '',
        name:'',
      },
      description:''
  }
  @Output() addProduct= new EventEmitter<Product>();
  @Output() showProduct= new EventEmitter<string>();

  onAddToCard(){
    this.addProduct.emit(this.product)
  }
 onShowDetail(){
    this.showProduct.emit(this.product.id)

 }


}
