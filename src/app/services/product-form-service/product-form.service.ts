import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ProductFormObject} from "../../models/product-form-object";
import {ProductSuggestionDto} from "../../models/product-suggestion-dto";

@Injectable({
  providedIn: 'root'
})
export class ProductFormService {

  private readonly url = "http://localhost:8080/";

  constructor(private http: HttpClient) {}

  submitProductForm(productFormObject: ProductFormObject): Observable<ProductSuggestionDto[]> {
    return this.http.post<ProductSuggestionDto[]>(this.url + "product", productFormObject);
  }

  submitNewProduct(productFormObject: ProductFormObject): Observable<ProductSuggestionDto[]> {
    return this.http.post<ProductSuggestionDto[]>(this.url + "product", productFormObject);
  }
}
