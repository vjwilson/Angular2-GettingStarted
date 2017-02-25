import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    listFilter: string = '';
    showImages: boolean = false;
    products: IProduct[];
    errorMessage: string;

    constructor(private _productService: ProductService) {

    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);

        console.log('In OnInit ', this.products);
    }

    toggleImages(): void {
        this.showImages = !this.showImages;
    }

    onNotify(message: string): void {
        console.log(message);
    }
}
