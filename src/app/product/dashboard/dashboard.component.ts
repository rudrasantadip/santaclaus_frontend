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

  redirect(url:String,productName:string){
      this.router.navigate([url],{
        queryParams:{
          product:productName
        }
      });
  }
}
