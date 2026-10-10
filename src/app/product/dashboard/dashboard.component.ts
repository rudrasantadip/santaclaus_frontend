import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/dao/category';
import { Product } from 'src/app/dao/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  categoryNames = ['All', 'Gift', 'Premium', 'Festive', 'Organic'];
  activeCategory = 'All';

  constructor(private productService: ProductService,private router:Router) {}
  
  ngOnInit(): void {
    this.getAllCategories();
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe((response) => {
      this.products = response;
    });
  }

  get filteredProducts() {
    if (this.activeCategory === 'All') return this.products;
    return (
      this.categories.find(
        (category) => category.categoryName === this.activeCategory
      )?.products ?? []
    );
  }

  getAllCategories() {
    this.productService.getAllCategories().subscribe((response) => {
      this.categories = response;
      this.categoryNames=this.extractNamesFromCategories(this.categories);
      this.products=this.extractProductsFromCategories(this.categories);
    });
  }

  extractNamesFromCategories(categories:Category[]):string[]{
    return categories.map(c=>c.categoryName);
  }

  extractProductsFromCategories(categories: Category[]): Product[] {
  return categories.flatMap(c =>
    (c.products ?? []).map(p => ({
      ...p,
      categoryName: c.categoryName
    }))
  );
}

calculateDiscount(price:number,percentage:number){
  console.log(price-((percentage/100)*price));
  return (price-((percentage/100)*price))
}


tilt(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement;
  const r = el.getBoundingClientRect();
  const x = (e.clientX - r.left) / r.width - 0.5;
  const y = (e.clientY - r.top) / r.height - 0.5;
  el.style.setProperty('--ry', `${(x * 14).toFixed(2)}deg`);
  el.style.setProperty('--rx', `${(-y * 14).toFixed(2)}deg`);
}

untilt(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement;
  el.style.setProperty('--ry', '0deg');
  el.style.setProperty('--rx', '0deg');
}

redirect(url:String,productName:string){
      this.router.navigate([url],{
        queryParams:{
          product:productName
        }
      });
  }
}
