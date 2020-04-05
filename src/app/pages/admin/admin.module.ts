import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRouterModule } from './admin-routing.module';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AdminComponent } from './admin.component';
import { CategoryListComponent } from '../category/category-list/category-list.component';
import { CategoryAddComponent } from '../category/category-add/category-add.component';
import { AddTagComponent } from '../tag/add-tag/add-tag.component';
import { TagListComponent } from '../tag/tag-list/tag-list.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    CategoryAddComponent,
    CategoryListComponent,
    TagListComponent,
    AddTagComponent
  ],
  imports: [
    CommonModule,
    AdminRouterModule,
    EditorModule
  ]
})
export class AdminModule { }
