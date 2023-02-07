import {Component, OnInit} from '@angular/core';
import {ProductFormObject} from "../../models/product-form-object";
import {ProductFormService} from "../../services/product-form-service/product-form.service";
import {Age} from "../../enums/age";
import {Income} from "../../enums/income";
import {NgForm} from "@angular/forms";
import {ProductSuggestionDto} from "../../models/product-suggestion-dto";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  productFormObject: ProductFormObject = new ProductFormObject();

  products: ProductSuggestionDto[] = [];

  agesValues: string[] = [];
  agesKeys: string[] = [];
  incomesValues: string[] = [];
  incomesKeys: string[] = [];

  constructor(private productFormService: ProductFormService) {
  }

  ngOnInit(): void {
    Object.values(Age).map(age => this.agesValues.push(age));
    Object.keys(Age).map(age => this.agesKeys.push(age));
    Object.values(Income).map(income => this.incomesValues.push(income));
    Object.keys(Income).map(income => this.incomesKeys.push(income));
  }

  submitProductForm(form: NgForm): void {
    if (form.valid) {
      this.productFormService.submitProductForm(this.productFormObject).subscribe(products => {
        this.products = products;
      });
    }
  }
}
