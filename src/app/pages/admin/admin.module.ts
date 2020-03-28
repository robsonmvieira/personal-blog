import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRouterModule } from './admin-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AdminComponent } from './admin.component';
import { CategoryListComponent } from '../category/category-list/category-list.component';


@NgModule({
  declarations: [DashboardComponent, AdminComponent, CategoryListComponent],
  imports: [
    CommonModule,
    AdminRouterModule,
    EditorModule
  ]
})
export class AdminModule { }
