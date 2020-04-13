import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './list/post-list.component';
import { AddPostComponent } from './add/add.component';
import { RemoveComponent } from './remove/remove.component';
import { OneComponent } from './one/one.component';
import { PostingRouterModule } from './posts-routing.module';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PostListComponent, AddPostComponent, RemoveComponent, OneComponent],
  exports: [PostListComponent, OneComponent, AddPostComponent],
  imports: [
    CommonModule,
    PostingRouterModule,
    AngularEditorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostsModule { }
