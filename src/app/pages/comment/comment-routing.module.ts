import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { CommentListComponent } from './comment-list/comment-list.component';

const routes: Routes = [
  {
    path: '', component: CommentListComponent
  }
]
NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export default class CommentRouterModule{}
