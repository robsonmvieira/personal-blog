import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryListComponent } from '../category/category-list/category-list.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AdminRouterModule {}
