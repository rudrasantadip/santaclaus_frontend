import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, SampleImage } from 'src/app/dao/product';
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
    price:0.0,
    discountPercent:0,
    productImage: '',
    sampleImages:[]
  };

  images :SampleImage[]= [];
  selectedImage = this.product.productImage;

  stars = [1, 2, 3, 4, 5];
  rating = 4;

  deliveryOptions = [
    { name: 'Pickup', note: 'Ready within 2 hours' },
    { name: 'Delivery', note: 'As soon as today' },
    { name: 'Shipping', note: 'Get it by Mar 22' }
  ];
  selectedDelivery = 'Pickup';

  sizes = ['XS', 'S', 'M', 'L', 'XL'];
  colors = ['#000', '#8b0000', '#0a3d62', '#556b2f'];

  constructor(private route:ActivatedRoute,private productService:ProductService){

  }

  ngOnInit(): void {
   this.route.queryParams.subscribe(params=>{
   this.productName=params['product']
   })

   this.productService.getProductsByName(this.productName)
   .subscribe(response=>{
    this.product=response;
    this.images=this.product.sampleImages;
    this.selectedImage = this.product.productImage;
   })
  }  


 

  

  tilt(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty('--ry', `${(x * 12).toFixed(2)}deg`);
    el.style.setProperty('--rx', `${(-y * 12).toFixed(2)}deg`);
  }

  untilt(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    el.style.setProperty('--ry', '0deg');
    el.style.setProperty('--rx', '0deg');
  }

  selectImage(image:string){
    this.selectedImage=image;
  }

  calculateDiscount(price:number,percentage:number){
  return (price-((percentage/100)*price))
}
}
