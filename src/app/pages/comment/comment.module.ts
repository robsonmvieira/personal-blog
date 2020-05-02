import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentAddComponent } from './comment-add/comment-add.component';
import CommentRouterModule from './comment-routing.module';


@NgModule({
  declarations: [CommentListComponent, CommentAddComponent],
  imports: [
    CommonModule,
    CommentRouterModule
  ],
  exports: [CommentListComponent, CommentAddComponent]
})
export class CommentModule { }
