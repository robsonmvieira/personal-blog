import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryRoutingModude } from './category-routing.module';
import { CategoryAddComponent } from './category-add/category-add.component';



@NgModule({
  declarations: [CategoryListComponent, CategoryAddComponent],
  exports: [CategoryListComponent, CategoryAddComponent],
  imports: [
    CommonModule,
    CategoryRoutingModude
  ]
})
export class CategoryModule { }
