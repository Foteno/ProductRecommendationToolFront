import {Component, Input} from '@angular/core';
import {ProductSuggestionDto} from "../../models/product-suggestion-dto";

@Component({
  selector: 'app-product-suggestion',
  templateUrl: './product-suggestion.component.html',
  styleUrls: ['./product-suggestion.component.scss']
})
export class ProductSuggestionComponent {

  @Input("products") products: ProductSuggestionDto[] = [];

}
