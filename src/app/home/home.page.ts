import { Component, OnInit } from '@angular/core';
import { Product } from '../classes/Product';
import { FetchProductsService } from '../services/fetch-products.service';
import { Store } from '../storeclasses/Store';
import { StoresDetailsPage } from '../storepages/stores-details/stores-details.page';
import { FetchStoresService } from '../stores/fetch-stores.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  products: Product;
  stores: Store;
  
  constructor(private fetchProductsService: FetchProductsService , private fetchStoresService: FetchStoresService) {};

  ngOnInit(): void {
    // product list
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

    //store list
    this.fetchStoresService.getStores().subscribe(
      data=>{
        console.log(data);
        this.stores = data;
        console.log(this.stores);

        for(let store of this.stores.data) {
          console.log(store.name);
          console.log(store.address);
        }
      }
        );
  }

}
