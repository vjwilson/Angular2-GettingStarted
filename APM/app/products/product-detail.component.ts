import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-product-detail',
    moduleId: module.id,
    templateUrl: 'product-detail.component.html',
    styleUrls: ['product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _productService: ProductService
    ) {
        console.log(this._route.snapshot.params['id']);
    }

    ngOnInit(): void {
        const id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`;

        this._productService.getProduct()
            .subscribe(
                product => this.product = product,
                error => this.errorMessage = <any>error);

        console.log('In OnInit ', this.product);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }
}
