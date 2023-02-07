import {Age} from "../enums/age";
import {Income} from "../enums/income";

export class ProductFormObject {
  age: Age | null = null;
  income: Income | null = null;
  isStudent: boolean | null = null;
}
