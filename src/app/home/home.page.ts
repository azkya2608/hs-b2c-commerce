import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/Product';
import { FetchProductsService } from '../services/fetch-products.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  products: Product;
  constructor(private fetchProductsService: FetchProductsService) {}

  ngOnInit(): void {
    this.fetchProductsService.getProducts().subscribe(
      data=>{
        console.log(data);
        this.products = data;
        console.log(this.products);

        for(let product of this.products.data) {
          console.log(product.name);
          console.log(product.price);
        }
      }
    );
  }

}
