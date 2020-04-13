import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRouterModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CategoryListComponent } from '../category/category-list/category-list.component';
import { CategoryAddComponent } from '../category/category-add/category-add.component';
import { AddTagComponent } from '../tag/add-tag/add-tag.component';
import { TagListComponent } from '../tag/tag-list/tag-list.component';
import { AddPostComponent } from '../posts/add/add.component';
import { PostListComponent } from '../posts/list/post-list.component';


import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminComponent,
    CategoryAddComponent,
    CategoryListComponent,
    TagListComponent,
    AddTagComponent,
    PostListComponent,
    AddPostComponent,
  ],
  imports: [
    CommonModule,
    AdminRouterModule,
    AngularEditorModule,
    HttpClientModule,
  ]
})
export class AdminModule { }
