import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/dao/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {


  productName:string='';
  product:Product={
    productId: 0,
    productName: '',
    description: '',
    productImage: ''
  };
  constructor(private route:ActivatedRoute,private productService:ProductService){

  }

  ngOnInit(): void {
   this.route.queryParams.subscribe(params=>{
   this.productName=params['product']
   })

   this.productService.getProductsByName(this.productName)
   .subscribe(response=>{
    this.product=response;
   })
  }  


  images = [
    'https://picsum.photos/600?1',
    'https://picsum.photos/600?2',
    'https://picsum.photos/600?3',
    'https://picsum.photos/600?4'
  ];

  selectedImage = this.images[0];

  selectImage(image:string){
    this.selectedImage=image;
  }

  sizes = ['XS', 'S', 'M', 'L', 'XL'];
  colors = ['#000', '#8b0000', '#0a3d62', '#556b2f'];
}
