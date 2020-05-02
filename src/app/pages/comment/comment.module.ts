import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentAddComponent } from './comment-add/comment-add.component';



@NgModule({
  declarations: [CommentListComponent, CommentAddComponent],
  imports: [
    CommonModule
  ]
})
export class CommentModule { }
