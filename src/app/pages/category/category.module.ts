import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModude } from './category-routing.module';



@NgModule({
  declarations: [CategoryListComponent],
  exports: [CategoryListComponent],
  imports: [
    CommonModule,
    CategoryRoutingModude
  ]
})
export class CategoryModule { }
