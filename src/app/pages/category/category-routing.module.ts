import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {
    path: '', component: CategoryListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

})
export class CategoryRoutingModude {}

