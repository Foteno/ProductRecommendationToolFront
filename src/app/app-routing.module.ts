import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductFormComponent} from "./pages/product-form/product-form.component";

const routes: Routes = [
  {path: "", component: ProductFormComponent},
  {path: "**", redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
