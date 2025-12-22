import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../dao/product';
import { Category } from '../dao/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl:string='http://localhost:8080/products';
  private categoryUrl:string='http://localhost:8080/categories'
  constructor(private http:HttpClient) 
  {

  }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.productUrl,{withCredentials:true});
  }

  getProductsByName(productName:string):Observable<Product>{
    let params = new HttpParams()
    .set("product",productName);
    return this.http.get<Product>(`${this.productUrl}/get`,{withCredentials:true,params:params});
  }

  getAllCategoryNames():Observable<string[]>{
    return this.http.get<string[]>(this.categoryUrl,{withCredentials:true});
  }

  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(`${this.categoryUrl}/all`,{withCredentials:true});
  }
}
