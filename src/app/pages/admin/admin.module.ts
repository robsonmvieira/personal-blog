import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRouterModule } from './admin-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AdminComponent } from './admin.component';
import { CategoryListComponent } from '../category/category-list/category-list.component';
import { CategoryAddComponent } from '../category/category-add/category-add.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    CategoryAddComponent,
    CategoryListComponent],
  imports: [
    CommonModule,
    AdminRouterModule,
    EditorModule
  ]
})
export class AdminModule { }
